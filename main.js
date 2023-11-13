async function searchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const pokemonDetails = document.getElementById('pokemonDetails');
        const pokemonNameDetail = document.getElementById('pokemonNameDetail');
        const pokemonImage = document.getElementById('pokemonImage');
        const pokemonHeight = document.getElementById('pokemonHeight');
        const pokemonWeight = document.getElementById('pokemonWeight');
        const pokemonType = document.getElementById('pokemonType');
        const pokemonAbilities = document.getElementById('pokemonAbilities');
        const pokemonMoves = document.getElementById('pokemonMoves');

        pokemonNameDetail.textContent = data.name.toUpperCase();
        pokemonImage.src = data.sprites.front_default;
        pokemonImage.alt = data.name;
        pokemonHeight.textContent = `Altura: ${data.height / 10} m`;
        pokemonWeight.textContent = `Peso: ${data.weight / 10} kg`;

        pokemonType.textContent = `Tipo: ${data.types.map(type => type.type.name).join(', ')}`;
        pokemonAbilities.textContent = `Habilidades: ${data.abilities.map(ability => ability.ability.name).join(', ')}`;

        const movesList = data.moves.map(move => move.move.name).slice(0, 5).join(', ');
        pokemonMoves.textContent = `Movimientos: ${movesList}`;

        pokemonDetails.style.display = 'block';
    } catch (error) {
        console.log(error);
        alert('Pokémon no encontrado. Intenta de nuevo.');
    }
}
async function loadPokemonList() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=30';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const pokemonList = document.getElementById('pokemonList');
        const pokemonArray = data.results;

        pokemonList.innerHTML = '';

        for (let index = 0; index < pokemonArray.length; index++) {
            const pokemon = pokemonArray[index];
            const listItem = document.createElement('li');
            listItem.textContent = `${index + 1}. ${pokemon.name}`;
            
          

            pokemonList.appendChild(listItem);
        }
    } catch (error) {
        console.log(error);
    }
}
/*llamamos la funcion nuevamente para cargar la lista */
loadPokemonList();

/*Esta funcion borra el elemento seleccionado*/
function clearPokemonDetails() {
    const pokemonDetails = document.getElementById('pokemonDetails');
    const pokemonNameDetail = document.getElementById('pokemonNameDetail');
    const pokemonImage = document.getElementById('pokemonImage');
    const pokemonHeight = document.getElementById('pokemonHeight');
    const pokemonWeight = document.getElementById('pokemonWeight');
    const pokemonType = document.getElementById('pokemonType');
    const pokemonAbilities = document.getElementById('pokemonAbilities');
    const pokemonMoves = document.getElementById('pokemonMoves');

    // Restablece todos los campos a su estado original
    pokemonNameDetail.textContent = '';
    pokemonImage.src = '';
    pokemonImage.alt = '';
    pokemonHeight.textContent = '';
    pokemonWeight.textContent = '';
    pokemonType.textContent = '';
    pokemonAbilities.textContent = '';
    pokemonMoves.textContent = '';

    pokemonDetails.style.display = 'none';
}
