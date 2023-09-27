class PokemonService {
	constructor() {
		this._baseUrl = 'https://pokeapi.co/api/v2/'
	}
	getPokemon(url) {
		return fetch(url)
			.then(response => response.json())
			.catch(error => console.log(error))
	}
	getPokemons(limit = 2, offset = 0) {
		const url = `${this._baseUrl}pokemon?limit=${limit}&offset=${offset}`
		return fetch(url)
			.then(response => response.json())
			.then(jsonBody => jsonBody.results)
			.catch(error => console.log(error))
	}
}
