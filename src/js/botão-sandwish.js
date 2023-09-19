const menuSuspenso = document.querySelectorAll('.menuSuspenso')
const closeMenu = document.querySelectorAll('.closeMenu')
const btnSandwish = document.querySelectorAll('.btnSandwish')
const pathElement = document.querySelectorAll('.btnSandwishSvgPath')
const spanBlack = document.querySelectorAll('.spanBlack')

const pathParamDactived = 'M3.75 9h16.5m-16.5 6.75h16.5'
const pathParamDdisabled = 'M6 18L18 6M6 6l12 12'
let count = 1

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

closeMenu.forEach(elemento => elemento.addEventListener('click', () => comportamentoBtnMenuSuspenso()))