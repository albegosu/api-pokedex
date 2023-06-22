const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 150;


const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchPokemon() {
  for (let i = 1; i <= pokemonCount; i++) {
    try {
      const response = await fetch(apiUrl + i);
      const pokemon = await response.json();
      createPokemonCard(pokemon);
      console.log(pokemon);
    } catch (error) {
      console.error(error);
    }
  }
}


function createPokemonCard(pokemon) {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
  
    const pokeTypes = pokemon.types.map(type => type.type.name);
    const type = pokeTypes[0];
  
    const color = colors[type];
  
    pokemonElement.style.backgroundColor = color;
  
    const pokeInnerHTML = `
      <div class="img-container">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      </div>
      <div class="info">
        <span class="number">${pokemon.id.toString().padStart(3, '0')}</span>
        <h3 class="name">${pokemon.name}</h3>
        <small class="type">Type: <span>${type}</span></small>
      </div>
    `;
  
    pokemonElement.innerHTML = pokeInnerHTML;
    pokeContainer.appendChild(pokemonElement);
  }
  
  fetchPokemon();