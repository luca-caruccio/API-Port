const authorListElements = document.querySelector(`.author__list`);
const author = localStorage.getItem("author");

async function onSearchChange(event) {
    const author = event.target.value
    renderAuth(title);
}

async function renderAuth(title) {
    const auth = await fetch(`https://openlibrary.org/search.json?author=${author}`)
    const authData = await auth.json();
    authortListElements.innerHTML = authData.map(auth => authHTML(auth)).join('');
}

function authHTML(auth) {
    return
    //not sure what to put here
}

renderAuth(title);