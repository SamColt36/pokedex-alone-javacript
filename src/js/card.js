'use strict'
const radioButtons = document.querySelectorAll('input[type="radio"]')
const checkButton = document.querySelector('.check-button')
const cardSearch = document.querySelector('.cardSearch')
import { iconHash, btnSandwish } from "./btn-sandwish.js";

function ativarSearch() {
	cardSearch.classList.toggle('hidden')
	btnSandwish.classList.toggle('z-50')
}

iconHash.addEventListener('click', () => ativarSearch())

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