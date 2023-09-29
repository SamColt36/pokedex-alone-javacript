
const listPokemonsOl = document.getElementById('listPokemons')
const service = new PokemonService()

function formatarNumeros(number) {
	const numberString = String(number)

	if (numberString.length === 1) return `00${numberString}`
	else if (numberString.length === 2) return `0${numberString}`
	else if (numberString.length === 3) return `00${numberString}`
	else return numberString
}

function convertPokemonToHtmlLi(pokemon) {
	const secondType = pokemon.types[1] ? `<li class="liType bg-white/25 py-1 px-3 rounded-full text-center text-xs text-white w-min lg:text-sm">${pokemon.types[1]}</li>` : ''
	return `
				<!--Li Card com Pokemon-->
						<li class="relative ${pokemon.types[0]} flex flex-col m-2 p-3 pb-1 text-white rounded-lg overflow-hidden shadow-lg shadow-black/20 sm:min-w-[40vw]">
							<!--Imagens de background-->
							<figure>
								<img src="./src/assets/background-pokeball-rectangle.png" alt="Ilustração de retângulo opaco"
									class="absolute top-0 left-0 -rotate-[10deg] -translate-x-2/3 -translate-y-2/3 h-24 z-10 opacity-25">
								<img src="./src/assets/background-pokeball.png" alt="Ilustração de pokeball opaca"
									class="absolute -bottom-4 -right-4 h-32 z-10 opacity-25">
							</figure>
							<!--/Imagens de background-->
							<!--ID do Pokemon-->
							<span class="text-right text-black font-medium opacity-10 z-20 lg:text-lg">#${formatarNumeros(pokemon.id)}</span>
							<!--/ID do Pokemon-->
							<section class="grid grid-cols-2">
								<!--Nome do Pokemon-->
								<h5 class="font-medium tracking-wide col-span-2 my-2 lg:text-lg">${pokemon.name}</h5>
								<!--/Nome do Pokemon-->
								<!--Types-->
								<ul class="flex flex-col space-y-2 col-span-1">
									<li class="bg-white/25 py-1 px-3 rounded-full text-center text-xs text-white w-min lg:text-sm">${pokemon.types[0]}</li>
									${secondType}
								</ul>
								<!--/Types-->
								<!--Imagem do Pokemon-->
								<img class="max-w-full h-20 self-end z-20 col-span-1 lg:h-24"
									src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
									alt="Imagem alusiva ao pokemon ${pokemon.name}.">
								<!--/Imagem do Pokemon-->
							</section>
						</li>
						<!--/Card com Pokemon-->
						<!--/Li Card com Pokemon-->
						`
}


(async function gerarPokemon() {
	const fetch = await service.getPokemons()
	const urlsObject = await fetch.map(i => i.url)

	const pokemonDetails = await Promise.all(
		urlsObject.map(e => service.getPokemon(e))
	)

	const sortedPokemons = pokemonDetails.sort((a, b) => a.id - b.id)

	sortedPokemons.forEach(pokemonDetail => {
		const name = pokemonDetail.name
		const id = pokemonDetail.id
		const types = pokemonDetail.types.map(type => type.type.name)
		const weight = pokemonDetail.weight
		const height = pokemonDetail.height
		const statsName = pokemonDetail.stats.map(stat => stat.stat.name)
		const statsValue = pokemonDetail.stats.map(stat => stat.base_stat)
		const sprites = pokemonDetail.sprites.other['official-artwork'].front_default

		const pokemon = new Pokemon(name, id, types, weight, height, statsName, statsValue, sprites)
		listPokemonsOl.innerHTML += convertPokemonToHtmlLi(pokemon)
	})
})()
