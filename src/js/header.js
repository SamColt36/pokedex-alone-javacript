//------------CÓDIGO REFERENTE AO MENU SANDWHISH------------//
const menuSuspenso = document.querySelectorAll('.menuSuspenso')
const closeMenu = document.querySelectorAll('.closeMenu')
const btnSandwish = document.querySelectorAll('.btnSandwish')
const pathElement = document.querySelectorAll('.btnSandwishSvgPath')
const spanBlack = document.querySelectorAll('.spanBlack')

const pathParamDactived = 'M3.75 9h16.5m-16.5 6.75h16.5'
const pathParamDdisabled = 'M6 18L18 6M6 6l12 12'
let count = 0

btnSandwish.forEach(e => e.classList.add('transition', 'duration-700', 'transition-all', 'ease-in-out'))
menuSuspenso.forEach(e => e.classList.add('transition', 'duration-700', 'transition-all', 'ease-in-out'))

function ativarMenu() {
	pathElement.forEach(e => e.setAttribute("d", pathParamDactived))

	spanBlack.forEach(e => {
		e.classList.remove('fixed')
		e.classList.add('hidden')
	})

	btnSandwish.forEach(e => {
		e.classList.remove('text-white')
		e.classList.add('text-black')
	})

	menuSuspenso.forEach(e => e.classList.add('translate-y-full'))
}

function desativarMenu() {
	pathElement.forEach(e => e.setAttribute("d", pathParamDdisabled))

	spanBlack.forEach(e => {
		e.classList.remove('hidden')
		e.classList.add('fixed')
	})

	btnSandwish.forEach(e => {
		e.classList.remove('text-black')
		e.classList.add('text-white')
	})

	menuSuspenso.forEach(e => e.classList.remove('translate-y-full'))
}

function comportamentoBtnMenuSuspenso() {
	count++
	return (count % 2 === 0) ? desativarMenu() : ativarMenu()
}

btnSandwish.forEach(e => e.addEventListener('click', () => comportamentoBtnMenuSuspenso()))
closeMenu.forEach(e => e.addEventListener('click', () => comportamentoBtnMenuSuspenso()))
//------------CÓDIGO REFERENTE AO ELEMENTO CLEAR INPUT------------//
const pokeSearchInput = document.querySelectorAll('#pokeSearch')
const clearButton = document.querySelectorAll('.clearButton')

pokeSearchInput.forEach(i => i.addEventListener('input', () => {
	let value = i.value
	if (value.trim() == '') {
		clearButton.forEach(e => e.classList.add('inline-block'))
	} else {
		clearButton.forEach(e => e.classList.remove('invisible'))
	}
}))

clearButton.forEach(i => i.addEventListener('click', function () {
	pokeSearchInput.forEach(e => e.value = '')
	i.classList.add('invisible')
}))
//------------CÓDIGO REFERENTE AO ELEMENTO SVG HASH------------//
const iconHash = document.querySelectorAll('.iconHash')
const cardSearch = document.querySelectorAll('.cardSearch')

function ativarSearch() {
	cardSearch.forEach(e => e.classList.toggle('hidden'))
	btnSandwish.forEach(e => e.classList.toggle('z-50'))
}

iconHash.forEach(e => e.addEventListener('click', () => ativarSearch()))
//------------CÓDIGO REFERENTE AO ELEMENTO SVG CHECK------------//
const radioButtons = document.querySelectorAll('input[type="radio"]')
const checkButton = document.querySelectorAll('.check-button')

radioButtons.forEach((radio) => {
	radio.addEventListener('change', () => {
		if (radio.id === 'name' || radio.id === 'id') {
			// formaDeBusca é responsável por retorna se a busca é por ID ou NAME
			const formaDeBusca = radio.id

			checkButton.forEach(e => {
				e.classList.remove('hidden')
				e.classList.add('block')
			})
		}
		else checkButton.forEach(e => {
				e.classList.add('hidden')
				e.classList.remove('block')
			})
	})
})

checkButton.forEach(checkButtonElements => checkButtonElements.addEventListener('click', () => {
		iconHash.forEach(() => ativarSearch())
	})
)