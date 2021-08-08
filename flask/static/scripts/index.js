var author = 'anonymous'
var debug = true;
var PORT = 5000;

// access home page i.e. index.html
// also used to test axios + flask
async function index() {
    await axios.get(`http://localhost:${PORT}`)
        .then(
            response => {
                console.log("Home page access successful as axios test!");
            })
        .catch(error => {
            console.log(error);
        });
}

// login and registration
async function login() {
    await axios.get("/login")
        .then(
            response => {
                console.log(response);
                console.log(response.data);
                window.location = "http://localhost:5000/login";
            })
        .catch(error => {
            console.log(error);
        });

}

async function register() {
    await axios.get("/register")
        .then(
            response => {
                console.log(response);
                console.log(response.data);
                window.location = "http://localhost:5000/register";
            })
        .catch(error => {
            console.log(error);
        });
}

// searches for all articles
async function article_all() {
    if (debug) {
        console.log("Finding all articles.");
    }

    await axios.get("/article")
        .then(
            response => {
                console.log(response);
                console.log(response.data);

                var accordion = document.querySelector(".accordion");
                for (let [index, article] of response.data["articles"].entries()) {
                    if (debug) {
                        console.log(article);
                    }

                    accordion.insertAdjacentHTML("beforeend",
                        `
                        <div class="card">
                            <div class="card-header" id="heading-${index + 1}">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapse-${index + 1}">
                                        ${article["title"]}
                                    </button>
                                </h2>
                            </div>
                            <div id="collapse-${index + 1}" class="collapse" aria-labelledby="heading-${index + 1}" data-parent="#accordion-parent">
                                <div class="card-body">
                                    <h3><i>${article["author"]}</i><h3>    
                                    <p>
                                        <block>
                                            ${article["content"]}
                                        </block>
                                    </p>
                                </div>
                            </div>
                        </div>
                        `);
                }
            })
        .catch(error => {
            console.log(error);
        });
}

// searches for article given fields
async function article_search() {
    var tags = Array.from(["keywords", "title", "author"]).map(id => document.querySelector(`#${id}`));
    var [keywords, title, author] = tags.map(tag => tag === null ? String() : tag.value);

    if (debug) {
        console.log(tags);
        console.log(keywords + "\n" + title + "\n" + author);
    }

    if (!(keywords.trim().length + title.trim().length + author.trim().length)) {
        await article_all();
        return;
    }

    await axios.get(`/article/search?keywords=${keywords}&title=${title}&author=${author}`, {
        headers: {
            'Accept': '*'
        }
    }).then(
        response => {
            console.log(response);
            console.log(response.data.data);
        }).catch(
        error => {
            console.log(error);
        });
}

// shares article
async function article_share() {
    var tags = Array.from(["title-share", "content-share"]).map(id => document.querySelector(`#${id}`));
    var [title, content] = tags.map(tag => tag === null ? String() : tag.value);

    if (debug) {
        console.log(tags);
        console.log(`title :\n\ n${title}\n`);
        console.log(`author:\n\n${author}\n`);
        console.log(`content:\n\n${content}\n`);
    }

    if (title.trim().length == 0) {
        alert('Title is required.');
        return;
    } else if (content.trim().length == 0) {
        alert('Content is required.');
        return;
    }

    await axios.post(`/article/share/${title}/${author}/${content}`, {
        headers: {
            'Accept': '*'
        }
    }).then(
        response => {
            console.log(response);
            console.log(response.data.data);
        }).catch(
        error => {
            console.log(error);
        });

}