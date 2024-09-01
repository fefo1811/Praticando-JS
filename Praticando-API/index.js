// Trabalhando com requisições POST
function createArticlesElement(articles){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    const p = document.createElement('p');

    h1.textContent = articles.title;
    span.textContent = articles.author;
    p.textContent = articles.content;
    
    div.classList.add('artigoPOST');
    div.append(h1, span, p);
    
    document.querySelector('#articles').append(div);
}


async function getArticles() {
    const articles = await fetch('http://localhost:3000/articles').then( res => res.json());
    // const articles = await response.json();
    console.log(articles[0]);

    articles.forEach(createArticlesElement);
}

// Primeiro criando uma requisição GET para recuperar os articles de db.json
document.addEventListener('DOMContentLoaded', () => {
    getArticles();
})


// Começando o método POST
const form = document.querySelector('form');
form.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const articleData = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        content: document.querySelector('#content').value,
    }

    const response = await fetch('http://localhost:3000/articles', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleData)
    })

    const savedArticle = await response.json();
    form.reset(); // Resetando formulário
    createArticlesElement(savedArticle)
});