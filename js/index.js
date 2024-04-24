const formbook = document.getElementById("formBook")
const booksSection = document.querySelector(".books")
const myLibrary = []

formbook.addEventListener("submit", (e) => {
  e.preventDefault()
  const title = document.getElementById("title").value
  const author = document.getElementById("author").value
  const pages = document.getElementById("pages").value
  const read = document.getElementById("read").value === "1" ? true : false
  console.log("read", read)

  const book = {
    title,
    author,
    pages,
    read,
  }

  addBookToLibrary(book)
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

Book.prototype.toggleRead = function () {
  this.read = !this.read
}

function addBookToLibrary(data) {
  const book = new Book(data.title, data.author, data.pages, data.read)
  myLibrary.push(book)
  updateBooks()
}

function updateBooks() {
  booksSection.innerHTML = ""

  if (myLibrary.length > 0) {
    myLibrary.forEach((book, index) => {
      const div = document.createElement("div")
      div.classList.add("book")

      const pTitle = document.createElement("p")
      pTitle.textContent = `Title: ${book.title}`
      div.appendChild(pTitle)

      const pAuthor = document.createElement("p")
      pAuthor.textContent = `Author: ${book.author}`
      div.appendChild(pAuthor)

      const pPages = document.createElement("p")
      pPages.textContent = `Total of Pages: ${book.pages}`
      div.appendChild(pPages)

      const btnDelete = document.createElement("button")
      btnDelete.classList.add("btn-delete")
      btnDelete.setAttribute("data-id", index)
      btnDelete.textContent = "REMOVE"
      div.appendChild(btnDelete)

      const btnToggleRead = document.createElement("button")
      btnToggleRead.classList.add("btn-read")
      btnToggleRead.textContent = book.read ? "READ" : "NOT READ"
      div.appendChild(btnToggleRead)

      booksSection.appendChild(div)

      btnDelete.addEventListener("click", () => {
        deleteBook(btnDelete.dataset.id)
      })

      btnToggleRead.addEventListener("click", () => {
        toogleReadBook(book)
      })
    })
  } else {
    booksSection.innerHTML = "No books in the Library"
  }
}

function deleteBook(id) {
  myLibrary.splice(id, 1)
  updateBooks()
}

function toogleReadBook(book) {
  book.toggleRead()
  updateBooks()
}
