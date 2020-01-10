document.addEventListener('DOMContentLoaded', () => {
  let allPokemonData = []
  const pokemonContainer = document.querySelector('#pokemon-container')
  const pokemonSearchInput = document.querySelector('#pokemon-search-form')
  const pokemonPostForm = document.querySelector('#pokemon-post-form')

  fetch('http://localhost:3000/pokemon')
    .then((responseObject) => responseObject.json())
    .then((pokeJSONData) => {
      allPokemonData = pokeJSONData
      pokemonContainer.innerHTML = renderAllPokemon(allPokemonData)

    })
  pokemonPostForm.addEventListener('submit', handlePostSubmit)

  pokemonSearchInput.addEventListener('input', (event) => handleSearchInput(event, allPokemonData, pokemonContainer))

  pokemonContainer.addEventListener('click', (event) => handleCardClick(event, allPokemonData))


  // find entire container and add a click listener 
  // check if if e.target has data-action attribute of delete
  // if it does:
  //   remove the grandparent node of the delete button

})
