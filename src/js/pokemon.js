'use strict'
class Pokemon {
	constructor(name, id, types, weight, height, statsValue, sprites) {
		this._name = name
		this._id = id
		this._types = types
		this._weight = weight
		this._height = height
		this._statsValue = statsValue
		this._sprites = sprites
	}

	get name() {
		return this.capitalize(this._name)
	}

	get id() {
		return this._id
	}

	get types() {
		return this._types
	}

	get weight() {
		// conversão de hg para kg
		return (this._weight / 10)
	}

	get height() {
		// conversão de dm para m
		return (this._height / 10)
	}

	get statsValue() {
		return this._statsValue
	}

	get sprites() {
		// Validação para caso dê bug na busca da imagem, o que ocorre no pokemon id 1013
		if (this._sprites == null) {
			return ('https://placehold.co/300x300')
		}
		else {
			return this._sprites
		}
	}

	capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	instancePokemon(pokemonDetails) {
		const name = pokemonDetails.name
		const id = pokemonDetails.id
		const types = pokemonDetails.types.map(type => type.type.name)
		const weight = pokemonDetails.weight
		const height = pokemonDetails.height
		const statsValue = pokemonDetails.stats.map(stat => stat.base_stat)
		const sprites = pokemonDetails.sprites.other['official-artwork'].front_default

		const pokemon = new Pokemon(name, id, types, weight, height, statsValue, sprites)

		return pokemon
	}
}
