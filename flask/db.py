
import os, pymongo
from dotenv import load_dotenv
from pprint import pprint
from typing import Iterable

from pymongo import MongoClient
from pymongo.errors import OperationFailure

# connect to MongoDB
url = None
client = None
load_dotenv()

try:
    url = os.getenv(key='mongo_do')
    client = MongoClient(url)
except (Exception, pymongo.errors.ServerSelectionTimeoutError) as error:
    pprint(f'Error: {error}')
    pprint('Trying backup MongoDB url.')
    url = os.getenv(key='mongo_backup')
    client = MongoClient(url)

# if __debug__:
#     pprint('-' * 100)
#     pprint(url)

client = MongoClient(url)

dbases = client.list_database_names()
# if __debug__:
#     pprint('-' * 100)
#     pprint(dbases)

# test access to admin database
db = client.admin
# if __debug__:
#     pprint('-' * 100)
#     pprint('admin database:')
#     pprint('-' * 100)
#     pprint(db)

# check server status
# user does not have access server status due to limited privleges
try:
    serverStatus_result = db.command(command="serverStatus", check=True)
    if __debug__:
        pprint('-' * 100)
        pprint(f'server status: {serverStatus_result}')

except Exception as err:
    pprint('-' * 100)
    pprint(err) 

# check database status
dbstats_result = db.command(command='dbstats', check=True)
# if __debug__:
#     pprint('-' * 100)
#     pprint(f'database statistics for admin db:')
#     pprint('-' * 100)
#     pprint(dbstats_result)

# create database
db = client['app_db']
# if __debug__:
#     pprint('-' * 100)
#     pprint('application database:')
#     pprint('-' * 100)
#     pprint(db)

# create collection for articles
articles = db['articles']

# create text index for text search
articles.create_index(keys=list([('content', pymongo.TEXT)]), background=True, unique=True)

# empty collection first
# articles.delete_many(filter=dict({}))

# if __debug__:
#     pprint('-' * 100)
#     pprint(f'Articles count after clearing collection: {articles.count_documents(filter=dict({}))}')

def upsert_one_article(title: str, author: str, content: str):
    filter = dict({
        'title': title,
        'author': author,
    })
    update = dict({
        '$set': dict({
            'content': content
        })
    })

    articles.update_one(filter=filter, update=update, upsert=True)

# insert article example
# if __debug__:
#     pprint('-' * 100)
#     pprint('Upsert one article example')
#     pprint('-' * 100)
#     upsert_one_article(
#         title='Sample title',
#         author='Sample author',
#         content= 'Sample content'
#     )

def find_many_articles(keywords: str, title: str, author: str):
    """
    Find all articles matching relative query fields.

    Parameters:
        keywords (Iterable[str]): Comma-separater string of keywords, where one of these must be present in an article to count as a match.
        title (str): Title of article.
        author (str): Author of article.

    Returns:
        
    """
    keywords_spaced = ' '.join(set([kw.strip() for kw in keywords.split(',')]))
    filter = dict({
        'title': title,
        'author': author,
        '$text': dict({
            '$search': keywords_spaced,
            '$caseSensitive': False,
            '$diacriticSensitive': False
        })
    })

    return list([article_found for article_found in articles.find(filter=filter)])

def find_all_articles():
    """
    Finds all articles.
    
    Parameters:
        None.

    Returns:
        Iterable[obj]: 
    """
    return list([article_found for article_found in articles.find()])
    
articles_all = find_all_articles()
pprint(type(articles_all))
# if __debug__:
#     pprint('-' * 100)
#     pprint(articles_all)

