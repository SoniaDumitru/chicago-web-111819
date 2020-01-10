function handlePostSubmit(event){
  event.preventDefault()
  const formData = {
    name: event.target[0].value,
    sprites: {
      front: event.target[1].value
    }
  }


  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  fetch('http://localhost:3000/pokemon', reqObj)
    .then(resp => resp.json())
    .then(pokeObj => {
      const pokemonContainer = document.querySelector('#pokemon-container')
      const pokeString = renderSinglePokemon(pokeObj)
      pokemonContainer.insertAdjacentHTML( 'beforeend', pokeString);
    })
}










function handleSearchInput(event, allPokemonData, pokemonContainer) {
  const filteredPokes = allPokemonData.filter(pokeObj => {
    return pokeObj.name.includes(event.target.value.toLowerCase())
  })
  const filteredPokeHTML = renderAllPokemon(filteredPokes)
  pokemonContainer.innerHTML = filteredPokeHTML ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
}


function handleCardClick(event, allPokemonData) {
  if (event.target.dataset.action === 'flip') {
    const clickedPokemon = allPokemonData.find((pokemonObject) => pokemonObject.id == event.target.dataset.id)
    event.target.src = (event.target.src === clickedPokemon.sprites.front ? clickedPokemon.sprites.back : clickedPokemon.sprites.front)
  } else if (event.target.dataset.action === 'delete') {
    deletePokemon(event)

  }
}

function deletePokemon(event) {
  const id = event.target.dataset.id //
  event.target.parentNode.parentNode.remove()

  fetch(`http://localhost:3000/pokemon/${id}`, { method: 'DELETE' })
    .then(resp => resp.json())
    .then( data => {
    })

}

/************************* Helper Fns for Producing HTML **********************/
function renderAllPokemon(pokemonArray) {
  return pokemonArray.map(renderSinglePokemon).join('')
}


function renderSinglePokemon(pokemon) {
  return (`
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
      <button data-id="${pokemon.id}" data-action="delete" class="pokemon-button">Delete</button>
    </div>
  </div>`)
}


