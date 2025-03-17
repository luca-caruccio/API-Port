const bookListElements = document.querySelector(`.book-list`);

async function main() {
    const books = await fetch("https://openlibrary.org/search.json")
    const authors = await fetch("https://www.omdbapi.com/?apikey=4d3b95cb&s=fast")
    const booksData = await authors.json();
    console.log(booksData);
        bookListElements.innerHTML = booksData
        .map((book) => bookHTML(book)).join("");
    
}

main();

function showBooksTitle(book) {
    localStorage.setItem("")
    window.location.href = `${window.location.origin}/book.html`
}

function showBooksAuthor(author) {
     localStorage.setItem("")
    window.location.href = `${window.location.origin}/author.html`
}

function bookHTML(book) {
    return `<div class="book__cover" onclick="showBooksAuthor(${author})">
                <div class="book__cover--container">
                  <h3>${book.title}</h4>
                    <p><b>Book Title:</b>${title}</p>
                    <p><b>Author:</b> ${author.name}</p>
                    <p><b>Link:</b> <a href="${book.website}" target="_blank">${book.website}</a></p>
                </div>
              </div>`
}