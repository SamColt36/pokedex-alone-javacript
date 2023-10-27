'use strict'
import { dinamizarHtml, gerarPokemonPorIdOrName, mainDetail } from "./main-details.js";
const svgSearch = document.querySelector('.svgSearch')
const pokeSearchInput = document.querySelector('.pokeSearch')
const clearButton = document.querySelector('.clearButton')
const caracteresDigitados = []
let count = 0



svgSearch.addEventListener('click', async function () {
	count++
	const body = document.querySelector('body')
	const nome = caracteresDigitados[caracteresDigitados.length - 1]
	const pokemon = await gerarPokemonPorIdOrName(nome)
	const main = document.querySelector('.main')
	const classes = ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'ground', 'flying', 'poison', 'fighting', 'psychic', 'dark', 'rock', 'bug', 'ghost', 'steel', 'fairy', 'dragon']
	main.innerHTML = mainDetail(pokemon)

	for (const e of classes) {
		if (body.classList.contains(e)) {
			body.classList.remove(e)
			break
		}
	}
	body.classList.add(pokemon.types[0])

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

