'use strict'
class PokemonService {
	constructor() {
		this._baseUrl = 'https://pokeapi.co/api/v2/'
		this._urlPokemon = 'https://pokeapi.co/api/v2/pokemon/'
	}

	async getPokemonDetails(nameOrId) {
		const urlPokemon = `${this._urlPokemon}${nameOrId}`
		const response = await fetch(urlPokemon)

		if (!response.ok) {
			swal(`Erro ao buscar detalhes do Pokémon: ${nameOrId}`)
			throw new Error(`Erro ao buscar detalhes do Pokémon: ${response.status}`)
		}

		const data = await response.json()
		return data
	}

	async getPokemon(url) {
		const response = await fetch(url)
		const data = await response.json()
		return data
	}

	async getPokemons(limit = 9, offset = 0) {
		const url = `${this._baseUrl}pokemon?limit=${limit}&offset=${offset}`
		const response = await fetch(url)

		const jsonBody = await response.json()
		return jsonBody.results
	}
}
