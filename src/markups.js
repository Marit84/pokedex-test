
import {
    getCapitalize,
    getIdFromUrl,
    getAnimatedShinyImageFromId
} from './utils';

export function createHomeMarkup() {
    return `
                    <h1>My Pokedex </h1>
                    <button id="view">View pokemons</button>
                    `;
}

export function createPokemonCardMarkup(pokemon) {
    var pokemonId = getIdFromUrl(pokemon.url);
    var imageUrl = getAnimatedShinyImageFromId(pokemonId);

    return `
                            <div class="pokemonCard" id="${pokemonId}">
                                <img src="${imageUrl}"/>
                                <h3>${getCapitalize(pokemon.name)}</h3>
                            </div>
                        `;
}

export function createPokemonsMarkup(pokemons, currentPage, perPage) {
    var pokemonList = pokemons
        .map(createPokemonCardMarkup)
        .join("");

    var isFirstPage = currentPage == 0;
    var isLastPage = (currentPage + 1) * perPage >= 151;
    return `
            <h1>My Pokemons</h1>
    ${isFirstPage ? "" : `<button id="prew">Previous</button>`} 
${isLastPage ? "" : `<button id="next">Next</button>`}
                        <div id="pokemonList">
                            ${pokemonList} 
                            </div>
                    `;
}

export function createPokemonMarkup(pokemon) {
    return `
                   
                   <h1>${pokemon.name} is ${pokemon.height} tall</h1>
                   <h2>${pokemon.name} is a ${pokemon.types[0].type.name}-type</h2> 
                   <button id="back">Back</button>
                   <button id="next">Next</button>
                   <div>
                   <img src="${pokemon.sprites.other.dream_world.front_default}">
                   </div>
                   <div>
                       <img src="${pokemon.sprites.front_default}">
                       </div>
                   `;
}

export function createLoadingPokemonsMarkup() {
    return `
                <h3>Loading pokemons...</h3>
                `;
}