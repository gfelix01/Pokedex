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
            const pokemonType = document.getElementById('pokemonType');
            const pokemonAbilities = document.getElementById('pokemonAbilities');
            const pokemonMoves = document.getElementById('pokemonMoves');

            pokemonNameDetail.textContent = data.name.toUpperCase();
            pokemonImage.src = data.sprites.front_default;
            pokemonImage.alt = data.name;
            pokemonHeight.textContent = `Altura: ${data.height / 10} m`;
            pokemonWeight.textContent = `Peso: ${data.weight / 10} kg`;

            // Muestra el tipo del Pokémon
            pokemonType.textContent = `Tipo: ${data.types.map(type => type.type.name).join(', ')}`;

            // Muestra las habilidades del Pokémon
            pokemonAbilities.textContent = `Habilidades: ${data.abilities.map(ability => ability.ability.name).join(', ')}`;

            // Muestra la lista de movimientos del Pokémon
            const movesList = data.moves.map(move => move.move.name).slice(0, 5).join(', ');
            pokemonMoves.textContent = `Movimientos: ${movesList}`;

            pokemonDetails.style.display = 'block';
        })
        .catch(error => {
            console.log(error);
            alert('Pokémon no encontrado. Intenta de nuevo.');
        });
}
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

    pokemonDetails.style.display = 'none'; // Oculta el contenedor de detalles
}
function loadPokemonList() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=30';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonList = document.getElementById('pokemonList');
            const pokemonArray = data.results;

            // Limpia la lista antes de agregar nuevos elementos
            pokemonList.innerHTML = '';

            pokemonArray.forEach(pokemon => {
                const listItem = document.createElement('li');
                listItem.textContent = pokemon.name;

                // Agrega un evento al elemento de la lista para mostrar los detalles del Pokémon
                listItem.addEventListener('click', () => {
                    searchPokemon(pokemon.name);
                });

                pokemonList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

// Llama a la función para cargar la lista al cargar la página
loadPokemonList();
