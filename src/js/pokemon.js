class Pokemon {
	constructor({name, id, types, weight, height, moves, stats, sprites}) {
		this._name = name
		this._id = id
		this._types = types
		this._weight = weight
		this._height = height
		this._moves = moves
		this._stats = stats
		this._sprites = sprites
	}

	get name() {
		return _name
	}

	get id() {
		return _id
	}

	get types() {
		return _types
	}

	get weight() {
		return _weight
	}

	get height() {
		return _height
	}
	
	get moves() {
		return _moves
	}
	
	get stats() {
		return _stats
	}
	
	get sprites() {
		return _sprites
	}
}