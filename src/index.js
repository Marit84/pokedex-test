
import {
    fetchPokemon,
    fetchPokemons
} from './services';

import {
    createHomeMarkup,
    createLoadingPokemonsMarkup,
    createPokemonMarkup,
    createPokemonsMarkup
} from './markups';



var mainNode = document.getElementById("main");

var currentPage = 0;
var perPage = 20;
var maxCount = 151;






function renderPokemon(pokemonId) {
    fetchPokemon(pokemonId)
        .then(function (pokemon) {
            mainNode.innerHTML = createPokemonMarkup(pokemon);

            var backButtonNode = document.getElementById("back");
            backButtonNode.addEventListener("click", function () {
                renderPokemons();
            });

            /*    var nextButtonNode = document.getElementById("next");
               nextButtonNode.addEventListener("click", function () {
                   renderPokemon();   //må få den til å vise neste pokemon
               }) */
        })
        .catch(function (error) {
            mainNode.innerHTML = `
                    <h1>Error loading page</h1>`;

        })
}

function renderPokemons(page, perPage) {
    mainNode.innerHTML = createLoadingPokemonsMarkup();

    fetchPokemons(page, perPage)
        .then(function (pokemons) {
            mainNode.innerHTML = createPokemonsMarkup(pokemons, currentPage, perPage);

            var previousButtonNode = document.getElementById("prew");
            if (previousButtonNode) {
                previousButtonNode.addEventListener("click", function () {
                    currentPage--;
                    renderPokemons(currentPage, perPage)
                });
            }

            var nextButtonNode = document.getElementById("next");
            if (nextButtonNode) {
                nextButtonNode.addEventListener("click", function () {

                    currentPage++;
                    renderPokemons(currentPage, perPage)
                });
            }

            var pokemonListNode = document.getElementById("pokemonList");
            pokemonListNode.childNodes.forEach(function (child) {
                child.addEventListener("click", function (event) {
                    var pokemonId = event.currentTarget.id;
                    renderPokemon(pokemonId);
                });
            });
        })
        .catch(function (error) {
            console.log(error);
            mainNode.innerHTML = `
                    <h1>Error loading page</h1>`;

        })

}

function renderHome() {
    mainNode.innerHTML = createHomeMarkup();

    let viewButtonNode = document.getElementById("view");
    viewButtonNode.addEventListener("click", function () {
        renderPokemons(currentPage, perPage);
    });
}

renderHome();