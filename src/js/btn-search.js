'use strict'
import { dinamizarHtml, gerarPokemonPorIdOrName, mainDetail } from "./main-details.js"
import { body, svgSearch, pokeSearchInput, clearButton, main } from './dom.js'

const caracteresDigitados = new Array()
let count = 0

async function perquisarPokemon() {
	count++
	const nome = caracteresDigitados[caracteresDigitados.length - 1]
	const pokemon = await gerarPokemonPorIdOrName(new Pokemon(), nome)
	main.html(mainDetail(pokemon))

	dinamizarHtml(pokemon)
	alterarBackgroundBodyDinamicamente(pokemon)

	setTimeout(() => {
		pokeSearchInput.val('')
	}, 500)
}

function alterarBackgroundBodyDinamicamente(pokemon) {
	return body.attr('class', pokemon.types[0])
}

svgSearch.click(perquisarPokemon)

pokeSearchInput.keypress(e => {
	if (e.keyCode === 13 || e.which === 13) {
		perquisarPokemon()
		return false
	}
})

pokeSearchInput.on('input propertychange', () => {
	caracteresDigitados.push(pokeSearchInput.val().trim())
	pokeSearchInput.val() === '' ? clearButton.addClass('inline-block') : clearButton.removeClass('invisible')
})

clearButton.click(() => {
	pokeSearchInput.val('')
	clearButton.addClass('invisible')
	console.clear()
})