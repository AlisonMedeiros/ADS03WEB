document.getElementById("pokemonForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita recarregar a página
    const pokemonName = document.getElementById("pokemonInput").value.toLowerCase();
    const resultDiv = document.getElementById("pokemonResult");

    if (!pokemonName) {
        resultDiv.innerHTML = "<p class='text-danger'>Digite um nome ou ID válido.</p>";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon não encontrado");
            }
            return response.json();
        })
        .then(data => {
            resultDiv.innerHTML = `
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}" alt="Imagem do ${data.name}" class="img-fluid">
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = "<p class='text-danger'>Pokémon não encontrado.</p>";
        });
});