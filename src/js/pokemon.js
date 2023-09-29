class Pokemon {
	constructor(name, id, types, weight, height, statsName, statsValue, sprites) {
		this._name = name
		this._id = id
		this._types = types
		this._weight = weight
		this._height = height
		this._statsName = statsName
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
		return this._weight
	}

	get height() {
		return this._height
	}

	get statsName() {
		return this.capitalize(this._statsName)
	}

	get statsValue() {
		return this._statsValue
	}

	get sprites() {
		return this._sprites
	}

	capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

}
