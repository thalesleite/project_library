const formbook = document.getElementById("formBook")
const myLibrary = []

formbook.addEventListener("submit", (e) => {
  e.preventDefault()
  const title = document.getElementById("title").value
  const author = document.getElementById("author").value
  const pages = document.getElementById("pages").value
  const read = document.getElementById("read").value === "1" ? true : false

  const book = {
    title,
    author,
    pages,
    read,
  }

  addBookToLibrary(book)
  console.log("submitted!!!", book)
  clear()
})

function clear() {
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("pages").value = 0
  document.getElementById("read").value = "0"
}

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(data) {
  const book = new Book(data.title, data.author, data.pages, data.read)
  myLibrary.push(book)
  console.log("myLibrary: ", myLibrary)
}
