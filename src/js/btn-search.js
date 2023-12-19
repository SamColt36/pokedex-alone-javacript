"use strict";
import {
  streamlineHtml,
  mainDetail,
  generatePokemonByIdOrName,
} from "./main-details.js";
import { body, svgSearch, pokeSearchInput, clearButton, main } from "./dom.js";

const caracteresDigitados = new Array();
let count = 0;

const searchPokemon = async () => {
  count++;
  const nome = caracteresDigitados[caracteresDigitados.length - 1];
  const pokemon = await generatePokemonByIdOrName(new Pokemon(), nome);
  main.html(mainDetail(pokemon));

  streamlineHtml(pokemon);
  changeBackgroundBodyDynamically(pokemon);

  setTimeout(() => {
    pokeSearchInput.val("");
  }, 500);
};

const changeBackgroundBodyDynamically = (pokemon) => {
  return body.attr("class", pokemon.types[0]);
};

svgSearch.click(searchPokemon);

pokeSearchInput.keypress((e) => {
  if (e.keyCode === 13 || e.which === 13) {
    searchPokemon();
    return false;
  }
});

pokeSearchInput.on("input propertychange", () => {
  caracteresDigitados.push(pokeSearchInput.val().trim());
  pokeSearchInput.val() === ""
    ? clearButton.addClass("inline-block")
    : clearButton.removeClass("invisible");
});

clearButton.click(() => {
  pokeSearchInput.val("");
  clearButton.addClass("invisible");
  console.clear();
});
