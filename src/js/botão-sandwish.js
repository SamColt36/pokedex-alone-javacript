const menuSuspenso = document.getElementById('menuSuspenso')
const closeMenu = document.getElementById('closeMenu')
const btnSandwish = document.getElementById('btnSandwish')
const pathElement = document.getElementById("btnSandwishSvgPath");
const spanBlack = document.getElementById('spanBlack')

// Parâmetro que gera o icon menu sandwish ativado
const pathParamDactived = 'M3.75 9h16.5m-16.5 6.75h16.5'
// Parâmetro que gera o icon menu sandwish desativado
const pathParamDdisabled = 'M6 18L18 6M6 6l12 12'
let count = 1

btnSandwish.classList.add('transition', 'duration-700', 'transition-all', 'ease-in-out')
menuSuspenso.classList.add('transition', 'duration-700', 'transition-all', 'ease-in-out')

function ativarMenu() {
	pathElement.setAttribute("d", pathParamDactived);
	spanBlack.classList.remove('fixed');
	spanBlack.classList.add('hidden');
	btnSandwish.classList.remove('text-white');
	btnSandwish.classList.add('text-black');
	menuSuspenso.classList.add('translate-y-full');
}

function desativarMenu() {
	pathElement.setAttribute("d", pathParamDdisabled);
	spanBlack.classList.remove('hidden');
	spanBlack.classList.add('fixed');
	btnSandwish.classList.remove('text-black');
	btnSandwish.classList.add('text-white');
	menuSuspenso.classList.remove('translate-y-full');
}

function comportamentoBtnMenuSuspenso() {
	count++
	return (count % 2 === 0) ? desativarMenu() : ativarMenu()
}

btnSandwish.addEventListener('click', () => {
	comportamentoBtnMenuSuspenso()
})


closeMenu.addEventListener('click', () => {
	comportamentoBtnMenuSuspenso()
})

