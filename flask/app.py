
from flask import Flask, jsonify, make_response, redirect, render_template, redirect, request, url_for
from flask_cors import CORS, cross_origin
from pprint import pprint

from db import *

# creating and ocnfiguring Flask application
app = Flask(__name__, static_folder='./static', template_folder='./templates')
app.config['ENV'] = 'production'
app.config['DEBUG'] = False
app.config['TESTING'] = False

# configure CORS
cors = CORS(app=app)
app.config['CORS_HEADERS'] = 'Content-Type'

# access home page i.e. index.html
@app.route(rule='/', methods=list(['GET']))
@cross_origin()
def index():
    """
    Home page.

    Parameters:
        None

    Returns:
        str: Rendered HTML home page.
    """
    if __debug__:
        print('index')

    return render_template(template_name_or_list='index.html')

# login and registration
@app.route(rule='/login', methods=list(['GET']))
@cross_origin()
def login():
    """
    Login page.

    Parameters:
        None

    Returns:
        str: Rendered HTML login page.
    """
    if __debug__:
        print('login')

    return render_template(template_name_or_list='login.html')

@app.route(rule='/register', methods=list(['GET']))
@cross_origin()
def register():
    """
    Registration page.

    Parameters:
        None

    Returns:
        str: Rendered HTML registration page.
    """
    if __debug__:
        print('register')

    return render_template(template_name_or_list='register.html')

# searching aritcles
#region
@app.route(rule='/article', methods=list(['GET']))
@cross_origin()
def article_all():
    """
    Retrieve all articles.

    Returns:
        flask.wrappers.Response: Response object.
    """
    if __debug__:
        print('article_all')

    response = find_all_articles()
    response_dict = dict({'articles': list([dict(list(article.items())[1:]) for article in response])})

    if __debug__:
        pprint('-' * 100)
        pprint(response)
        pprint('-' * 100)
        pprint(response_dict)
        print('Finding all articles is successful.')

    return make_response(jsonify(response_dict), 200)

@app.route(rule="/article/search", methods=(['GET']))
@cross_origin()
def article_search():
    """
    Query for articles with search bar fields.

    Parameters:
        keywords (str): Comma-separated list of keywords entered as a single string.
        title (str): Title of article.
        author (str): Author of article.

    Returns:
        flask.wrappers.Response: Response object.
    """

    if __debug__:
        print('article_search')

    args = request.args
    serialized = '<br/>'.join(f'{key}: {value}' for key, value in list(request.args.items()))

    if __debug__:
        print(serialized)

    return make_response(jsonify(args), 200)

#endregion

@app.route(rule="/article/share/<string:title>/<string:author>/<string:content>", methods=(['POST']))
@cross_origin()
def article_share(title: str, author: str, content: str):
    """
    Share articles.

    Parameters:
        title (str): Title of article.
        author (str): Author of article.
        content (str): Content of article.

    Returns:
        flask.wrappers.Response: Response object.
    """

    if __debug__:
        print('article_share')
        print(f'title: {title}')
        print(f'author: {author}')
        print(f'content: {content}')

    response_dict = dict({
        'title': title,
        'author': author,
        'content': content
    })

    upsert_one_article(**response_dict)
    
    if __debug__:
        print('Upsert of article is successful.')

    return make_response(response_dict, 200)

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=False)
