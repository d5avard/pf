const Character = require('../entities/characters')

function CharacterFactory(abilityFactory) {
	this.abilityFactory = abilityFactory
}

CharacterFactory.prototype.create = function () {
	return new Character()
}

module.exports = CharacterFactory