const tBody = document.querySelector('tbody')

function main() {
  document.addEventListener('DOMContentLoaded', function(){
    fetchAnimals()
    createFormListener()
  })
}

function createFormListener(){
  const form = document.querySelector('#animal-form')
  form.addEventListener('submit', function(e){
    e.preventDefault()
    const formData = scrapeFormData(e)
    e.target.reset()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    fetch('http://localhost:3000/animals', reqObj)
      .then(resp => resp.json())
      .then(animalObj => {
        renderAnimal(animalObj)
      })
  })
}

function scrapeFormData(e){
  return {
    name: e.target['name'].value,
    gender: e.target['gender'].value,
    species: e.target['species'].value,
  }
}




function fetchAnimals(){
  fetch('http://localhost:3000/animals')
  .then(resp =>  resp.json())
  .then(animals => {
    renderAnimals(animals)
  })
}

function renderAnimals(animals){
  animals.map(renderAnimal)
}

function renderAnimal(animalObj){
  const row = document.createElement('tr')
  const nameCell = document.createElement('td')
  nameCell.innerText = animalObj.name

  const genderCell = document.createElement('td')
  genderCell.innerText = animalObj.gender
  const speciesCell = document.createElement('td')
  speciesCell.innerText = animalObj.species

  row.append(nameCell, genderCell, speciesCell)
  tBody.append(row)
}

main()







