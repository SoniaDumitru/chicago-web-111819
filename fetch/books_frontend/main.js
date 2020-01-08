function main(){
  document.addEventListener('DOMContentLoaded', function(){
    fetchBooks()
    addFormListener()
  })
}

function addFormListener(){
  const form = document.querySelector('form')

  form.addEventListener('submit', function(e){
    e.preventDefault()
    const formData = {
      title: e.target[0].value,
      author: e.target[1].value
    }

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    fetch('http://localhost:3000/books', reqObj)
      .then(resp => resp.json())
      .then(bookObj => {
        renderBook(bookObj)
      })
  })
}

function fetchBooks(){
  fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(books=> {
      renderBooks(books)
    })
}

function renderBooks(books){
  books.forEach(function(bookObj){
    renderBook(bookObj)
  })
}

function renderBook(bookObj){
  const bookList = document.querySelector('#book-list')
  const bookEl = document.createElement('p')
  bookEl.innerHTML = `${bookObj.title} - ${bookObj.author}`
  bookList.append(bookEl)
}


main()









