'use strict'
//------------CÓDIGO REFERENTE AO MENU SANDWHISH------------//
const menuSuspenso = document.querySelector('.menuSuspenso')
const closeMenu = document.querySelector('.closeMenu')
const btnSandwish = document.querySelector('.btnSandwish')
const pathElement = document.querySelector('.btnSandwishSvgPath')
const spanBlack = document.querySelector('.spanBlack')


const pathParamDactived = 'M3.75 9h16.5m-16.5 6.75h16.5'
const pathParamDdisabled = 'M6 18L18 6M6 6l12 12'

const iconHash = document.querySelector('.iconHash')
const cardSearch = document.querySelector('.cardSearch')

import { dinamizarHtml, gerarPokemonPorIdOrName, mainDetail } from "./main-details.js";
const pokeSearchInput = document.querySelector('.pokeSearch')
const clearButton = document.querySelector('.clearButton')
const svgSearch = document.querySelector('.svgSearch')
const caracteresDigitados = []

const radioButtons = document.querySelectorAll('input[type="radio"]')
const checkButton = document.querySelector('.check-button')

let count = 0

btnSandwish.classList.add('transition', 'duration-700', 'transition-all', 'ease-in-out')
menuSuspenso.classList.add('transition', 'duration-700', 'transition-all', 'ease-in-out')

function toggleClass() {
	spanBlack.classList.toggle('fixed')
	spanBlack.classList.toggle('hidden')

	btnSandwish.classList.toggle('text-white', 'text-black')
	iconHash.classList.toggle('z-50')
	menuSuspenso.classList.toggle('translate-y-full')
}

function ativarMenu() {
	pathElement.setAttribute("d", pathParamDdisabled)
	toggleClass()
}

function desativarMenu() {
	pathElement.setAttribute("d", pathParamDactived)
	toggleClass()
}

function comportamentoBtnMenuSuspenso() {
	count++
	return (count % 2 === 0) ? desativarMenu() : ativarMenu()
}

btnSandwish.addEventListener('click', comportamentoBtnMenuSuspenso())
closeMenu.addEventListener('click', comportamentoBtnMenuSuspenso())
//------------CÓDIGO REFERENTE AO ELEMENTO CLEAR INPUT------------//
svgSearch.addEventListener('click', async function() {
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
//------------CÓDIGO REFERENTE AO ELEMENTO SVG HASH------------//
function ativarSearch() {
	cardSearch.classList.toggle('hidden')
	btnSandwish.classList.toggle('z-50')
}

iconHash.addEventListener('click', () => ativarSearch())
//------------CÓDIGO REFERENTE AO ELEMENTO SVG CHECK------------//
radioButtons.forEach(e => e.addEventListener('change', () => {
	if (e.id === 'name' || e.id === 'id') {
		checkButton.classList.remove('hidden')
		checkButton.classList.add('block')
	}
	else {
		checkButton.classList.add('hidden')
		checkButton.classList.remove('block')
	}
}))

checkButton.addEventListener('click', () => ativarSearch())

