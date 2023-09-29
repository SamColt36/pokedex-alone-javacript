class PokemonService {
	constructor() {
		this._baseUrl = 'https://pokeapi.co/api/v2/'
	}

	async getPokemon(url) {
		const response = await fetch(url)
		const data = await response.json()
		return data
	}

	async getPokemons(limit = 10, offset = 0) {
		const url = `${this._baseUrl}pokemon?limit=${limit}&offset=${offset}`
		const response = await fetch(url)

		const jsonBody = await response.json()
		return jsonBody.results
	}
}
