const authorListElements = document.querySelector(`.book-list`);
const author = localStorage.getItem("author");

async function renderAuth() {
    const title = document.querySelector(`.book__search--temp`).value
    const auth = await fetch(`https://openlibrary.org/search.json?q=${title}`)

    const authData = await auth.json();
    const result = authData.docs
    console.log(authData);
    authorListElements.innerHTML = result.map(item => authHTML(item)).join('');
    
    
}

renderAuth();

function authHTML(item) {
    return `
    <div class="book__title">
            ${item.title}
          </div>
          <p class="book__body">
            ${item.author_name}
          </p>
    `
}