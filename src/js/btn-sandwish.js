'use strict'
import { btnSandwish, iconHash, menuSuspenso, closeMenu, pathElement, spanBlack, pathActived, pathDisabled } from './dom.js'

let count = 0

btnSandwish.addClass('transition duration-700 transition-all ease-in-out')
menuSuspenso.addClass('transition duration-700 transition-all ease-in-out')

function toggleClass() {
	spanBlack.toggleClass('fixed hidden')
	btnSandwish.toggleClass('text-white text-black')
	iconHash.toggleClass('z-50')
	menuSuspenso.toggleClass('translate-y-full')
}

function ativarMenu() {
	pathElement.attr("d", pathDisabled)
	toggleClass()
}

function desativarMenu() {
	pathElement.attr("d", pathActived)
	toggleClass()
}

function comportamentoBtnMenuSuspenso() {
	count++
	return (count % 2 == 0) ? desativarMenu() : ativarMenu()
}

btnSandwish.click(comportamentoBtnMenuSuspenso)
closeMenu.click(comportamentoBtnMenuSuspenso)