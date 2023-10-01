const service = new PokemonService()
const pokemon = new Pokemon()

async function gerarPokemonPorIdOrName(idOrName) {
	const pokemonDetails = await service.getPokemonDetails(idOrName)
	const pokemonInstanciado = pokemon.intencePokemon(pokemonDetails)
	dinamizarHtml(pokemonInstanciado)
}
gerarPokemonPorIdOrName(500)
////////////////////////////////////////////////////////////////////////////////
function dinamizarHtml(pokemon) {
	// aplicar desestruturação do objeto pokemon
	const pokemonType = document.querySelectorAll('.pokemonType')
	const pokemonName = document.querySelectorAll('.pokemonName')
	const pokemonID = document.querySelectorAll('.pokemonID')
	const pokemonSprites = document.querySelectorAll('.pokemonSprites')
	const pokemonWeight = document.querySelectorAll('.pokemonWeight')
	const pokemonHeight = document.querySelectorAll('.pokemonHeight')
	const pokemonStatsValue = document.querySelectorAll('.pokemonStat')
	const pokemonStatsValueBar = document.querySelectorAll('.statsValueBar')

	pokemonType.forEach(i => i.classList.toggle(`${pokemon.types[0]}`))
	pokemonName.forEach(i => i.innerHTML = `${pokemon.name}`)
	pokemonID.forEach(i => i.innerHTML = `#${pokemon.formatarNumeros(pokemon.id)}`)
	pokemonSprites.forEach(i => {
		i.setAttribute('src', `${pokemon.sprites}`)
		i.setAttribute('alt', `${pokemon.name}`)
	})
	pokemonWeight.forEach(i => i.innerHTML = `${pokemon.weight} kg`)
	pokemonHeight.forEach(i => i.innerHTML = `${pokemon.height} m`)

	for (let j = 0; j < pokemonStatsValue.length; j++) {
		const element = pokemonStatsValue[j]
		const value = (pokemon.statsValue)[j]
		element.textContent = value

		pokemonStatsValueBar[j].style.width = `${value}%`
	}
}
