class PokemonService {
	constructor() {
		this._baseUrl = 'https://pokeapi.co/api/v2/'
		this._urlPokemon = 'https://pokeapi.co/api/v2/pokemon/'
	}

	async getPokemonDetails(nameOrId) {
		const urlPokemon = `${this._urlPokemon}${nameOrId}`
		const response = await fetch(urlPokemon)
		const data = await response.json()
		return data
	}

	async getPokemon(url) {
		const response = await fetch(url)
		const data = await response.json()
		return data
	}

	async getPokemons(limit = 1, offset = 0) {
		const url = `${this._baseUrl}pokemon?limit=${limit}&offset=${offset}`
		const response = await fetch(url)

		const jsonBody = await response.json()
		return jsonBody.results
	}
}
