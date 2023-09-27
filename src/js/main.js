const listPokemonsOl = document.getElementById('listPokemons')
const service = new PokemonService()

function convertPokemonToHtmlLi(pokemon) {
	return `
		<!--Li Card com Pokemon-->
				<li class="relative bg-grass flex flex-col m-2 p-3 pb-1 text-white rounded-lg overflow-hidden shadow-lg shadow-black/20 sm:min-w-[40vw]">
					<!--Imagens de background-->
					<figure>
						<img src="./src/assets/background-pokeball-rectangle.png" alt="Ilustração de retângulo opaco"
							class="absolute top-0 left-0 -rotate-[10deg] -translate-x-2/3 -translate-y-2/3 h-24 z-10 opacity-25">
						<img src="./src/assets/background-pokeball.png" alt="Ilustração de pokeball opaca"
							class="absolute -bottom-4 -right-4 h-32 z-10 opacity-25">
					</figure>
					<!--/Imagens de background-->
					<!--ID do Pokemon-->
					<span class="text-right text-black font-medium opacity-10 z-20 lg:text-lg">#001</span>
					<!--/ID do Pokemon-->
					<section class="grid grid-cols-2">
						<!--Nome do Pokemon-->
						<h5 class="font-medium tracking-wide col-span-2 my-2 lg:text-lg">${pokemon.name}</h5>
						<!--/Nome do Pokemon-->
						<!--Types-->
						<ul class="flex flex-col space-y-2 col-span-1">
							<li class="bg-white/25 py-1 px-3 rounded-full text-center text-xs text-white w-min lg:text-sm">
								Grass</li>
							<li class="bg-white/25 py-1 px-3 rounded-full text-center text-xs text-white w-min lg:text-sm">
								Poison</li>
						</ul>
						<!--/Types-->
						<!--Imagem do Pokemon-->
						<img class="max-w-full h-20 self-end z-20 col-span-1 lg:h-24"
							src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
							alt="${pokemon.name}">
						<!--/Imagem do Pokemon-->
					</section>
				</li>
				<!--/Card com Pokemon-->
				<!--/Li Card com Pokemon-->
				`
}

service.getPokemons()
	.then(pokemons => pokemons.map(e => e.url))
	.then(pokemonDetail => pokemonDetail.forEach(link => gerarPokemon(link)))

// Essa função é responsável por perar os links de da acesso a cada pokemon e fazer a requisição com informações detalhadas.
function gerarPokemon(link) {
	service.getPokemon(link)
		.then(bodyJson => console.log(bodyJson))
}







//listPokemonsOl.innerHTML = pokemons.map(convertPokemonToHtmlLi).join('')

