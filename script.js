// COLORS FOR TYPES BG
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
}

let pokemons = [];

//API
async function getPokemons() {
	for (let i = 0; i < 50; i++) {
		try {
			const URL = 'https://pokeapi.co/api/v2/pokemon/';
			let response = await fetch(URL + i);
			let pokemon = await response.json();

			console.log(pokemon);
			
			createCard(pokemon);

		} 

		catch (error) {
			console.log(error);
		}	
	}
}

getPokemons()

//CREATE COMPONENTS

function createCard(pokemon) {

	const poke_container = document.getElementById('poke-container');

	const pokeTypes = pokemon.types.map(type => type.type.name);
	const type = pokeTypes[0];
	const color = colors[type];

	let containerPokemon = document.createElement('div');
	containerPokemon.classList.add('pokemon');
	containerPokemon.style.backgroundColor = color;
	poke_container.appendChild(containerPokemon);

	let containerImg = document.createElement('div');
	containerPokemon.appendChild(containerImg);

	let img = document.createElement('img');
	img.src = pokemon.sprites.front_default;
	img.classList.add('img-container');
	containerImg.appendChild(img);

	let info = document.createElement('div');
	info.classList.add('info');
	containerPokemon.appendChild(info);

	let order = document.createElement('p');
	order.classList.add('number');
	order.textContent = `# ${pokemon.id.toString().padStart(3, '0')}`;
	info.appendChild(order);

	let nameText = document.createElement('p');
	nameText.classList.add('name')
	nameText.textContent = pokemon.name;
	info.appendChild(nameText);

	let pokeType = document.createElement('p');
	pokeType.textContent = `Type: ${type}`;
	info.appendChild(pokeType);
}