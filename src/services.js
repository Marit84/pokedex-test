export function fetchPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (res) {
            return res.json();
        });
}


export function fetchPokemons(page, perPage) {

    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${page * perPage}`)  //returnerer et promise av lista av pokemons
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.results;  //array av pokemons, kan hente ut etter index
        });
}