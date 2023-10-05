'use strict'
import { dinamizarHtml, gerarPokemonPorIdOrName, mainDetail } from "./main-details.js";
const svgSearch = document.querySelector('.svgSearch')
const pokeSearchInput = document.querySelector('.pokeSearch')
const clearButton = document.querySelector('.clearButton')
const caracteresDigitados = []

svgSearch.addEventListener('click', async function () {
	const nome = caracteresDigitados[caracteresDigitados.length - 1]
	const pokemon = await gerarPokemonPorIdOrName(nome)
	const main = document.querySelector('.main')

	main.innerHTML = mainDetail(pokemon)
	dinamizarHtml(pokemon)
})

pokeSearchInput.addEventListener('input', () => {
	caracteresDigitados.push((pokeSearchInput.value).trim())
	pokeSearchInput.value === '' ? clearButton.classList.add('inline-block') : clearButton.classList.remove('invisible')
})

clearButton.addEventListener('click', () => {
	pokeSearchInput.value = ''
	clearButton.classList.add('invisible')
	console.clear()
})

