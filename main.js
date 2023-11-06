function searchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonDetails = document.getElementById('pokemonDetails');
            const pokemonNameDetail = document.getElementById('pokemonNameDetail');
            const pokemonImage = document.getElementById('pokemonImage');
            const pokemonHeight = document.getElementById('pokemonHeight');
            const pokemonWeight = document.getElementById('pokemonWeight');

            pokemonNameDetail.textContent = data.name.toUpperCase();
            pokemonImage.src = data.sprites.front_default;
            pokemonImage.alt = data.name;
            pokemonHeight.textContent = `Altura: ${data.height / 10} m`;
            pokemonWeight.textContent = `Peso: ${data.weight / 10} kg`;

            pokemonDetails.style.display = 'block';
        })
        .catch(error => {
            console.log(error);
            alert('Pokémon no encontrado. Intenta de nuevo.');
        });
}
function loadPokemonList() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20'; // Obtener los primeros 20 Pokémon

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonList = document.getElementById('pokemonList');
            const pokemonArray = data.results;

            pokemonArray.forEach(pokemon => {
                const listItem = document.createElement('li');
                listItem.textContent = pokemon.name;
                pokemonList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

// Llama a la función para cargar la lista al cargar la página
loadPokemonList();

function clearPokemonDetails() {
    const pokemonDetails = document.getElementById('pokemonDetails');
    pokemonDetails.innerHTML = ''; // Borra el contenido
    pokemonDetails.style.display = 'none'; // Oculta el contenedor de detalles
}
