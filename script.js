async function search() {
    var searchInput = document.getElementById("search-input").value.toLowerCase();
    var searchResults = document.getElementById("search-results");
    
    // Clear previous search results
    searchResults.innerHTML = "";
    
    try {
        // Fetch Pokémon data from the PokeAPI
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`);
        const data = await response.json();

        // Display Pokémon name, image, weight, and height in the results container
        var resultItem = document.createElement("div");
        resultItem.className = "result-item";
        var pokemonName = document.createElement("p");
        pokemonName.textContent = `Name: ${data.name}`;
        var pokemonImage = document.createElement("img");
        pokemonImage.src = data.sprites.front_default;
        var pokemonWeight = document.createElement("p");
        pokemonWeight.textContent = `Weight: ${data.weight}`;
        var pokemonHeight = document.createElement("p");
        pokemonHeight.textContent = `Height: ${data.height}`;
        resultItem.appendChild(pokemonName);
        resultItem.appendChild(pokemonImage);
        resultItem.appendChild(pokemonWeight);
        resultItem.appendChild(pokemonHeight);
        searchResults.appendChild(resultItem);
    } catch (error) {
        // Display an error message if the Pokémon is not found
        var errorMessage = document.createElement("p");
        errorMessage.textContent = "Pokémon not found.";
        searchResults.appendChild(errorMessage);
    }
}
