document.addEventListener('DOMContentLoaded', function(){
  handleForm()
  addDeleteListener()
})


function addDeleteListener(){
  const commentContainer = document.querySelector('#comments-container')

  commentContainer.addEventListener('click', function(event){
    if(event.target.className === 'delete-btn'){
      event.target.parentNode.remove()
    } 
  })
}


function handleForm(){
  const form = document.querySelector('form')

  form.addEventListener('submit', function(event){
    event.preventDefault()
    const commentContainer = document.querySelector('#comments-container')
    const newCommentText = event.target[0].value

    const h4Element = document.createElement('h4')
    h4Element.innerText = newCommentText

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'remove'
    deleteBtn.className = 'delete-btn'
    h4Element.append(deleteBtn)


    commentContainer.append(h4Element)
    event.target.reset()
  })
}



