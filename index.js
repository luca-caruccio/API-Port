const

async function main() {
    const books = await fetch("https://openlibrary.org/search.json")
    const booksData = await books.json();
    
}

main();