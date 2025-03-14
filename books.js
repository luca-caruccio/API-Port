const authorListElements = document.querySelector(`.book-list`);
const author = localStorage.getItem("author");

async function renderAuth() {
    const title = document.querySelector(`.book__search--temp`).value
    const auth = await fetch(`https://openlibrary.org/search.json?author =${title}`)
    const authData = await auth.json();
    const result = authData.docs
    console.log(result);
    authorListElements.innerHTML = result.map(item => authHTML(item)).join('');
    
    
}

renderAuth();

function authHTML(item) {
    return `
    <div class="book__title">
            ${item.author_name}
          </div>
          <p class="book__body">
            Book Body
          </p>
    `
}