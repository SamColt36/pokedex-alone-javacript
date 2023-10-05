'use strict'
export const btnSandwish = document.querySelector('.btnSandwish')
export const iconHash = document.querySelector('.iconHash')
const menuSuspenso = document.querySelector('.menuSuspenso')
const closeMenu = document.querySelector('.closeMenu')
const pathElement = document.querySelector('.btnSandwishSvgPath')
const spanBlack = document.querySelector('.spanBlack')

const pathActived = 'M3.75 9h16.5m-16.5 6.75h16.5'
const pathDisabled = 'M6 18L18 6M6 6l12 12'


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
	pathElement.setAttribute("d", pathDisabled)
	toggleClass()
}

function desativarMenu() {
	pathElement.setAttribute("d", pathActived)
	toggleClass()
}

function comportamentoBtnMenuSuspenso() {
	count++
	return (count % 2 == 0) ? desativarMenu() : ativarMenu()
}

btnSandwish.addEventListener('click', () => comportamentoBtnMenuSuspenso())
closeMenu.addEventListener('click', () => comportamentoBtnMenuSuspenso())


