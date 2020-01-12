var AbilityScoresMethod = function() {
	if(this.constructor === AbilityScoresMethod) {
		throw new Error('Cannot instanciate abstract class')
	}

	this.strength = 0
	this.dexterity = 0
	this.constitution = 0
	this.intelligence = 0
	this.wisdom = 0
	this.charisma = 0	
}

AbilityScoresMethod.prototype.create = function () {
	throw new Error('Cannot call abstract method')
}

module.exports = AbilityScoresMethod