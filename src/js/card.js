'use strict'
import { radioButtons, checkButton, cardSearch, iconHash, btnSandwish } from "./dom.js";

function ativarSearch() {
	$(cardSearch).toggleClass('hidden')
	$(btnSandwish).toggleClass('z-50')
}

iconHash.click(ativarSearch)

radioButtons.change(() => {
	return (radioButtons) ? checkButton.removeClass('hidden').addClass('block') : checkButton.addClass('hidden').removeClass('block')
})

checkButton.click(ativarSearch)