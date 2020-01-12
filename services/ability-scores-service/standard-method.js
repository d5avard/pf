var AbilityScoresMethod = require('./ability-scores-method')
var rollD6 = require('../../utils/dice').rollD6

var StandardMethod = function() {
	AbilityScoresMethod.apply(this, arguments)
}

StandardMethod.prototype = Object.create(AbilityScoresMethod.prototype)
StandardMethod.prototype.constructor = StandardMethod

StandardMethod.prototype.create = function () {
	this.strength = this.sumOf4D6Minus1()
	this.dexterity = this.sumOf4D6Minus1()
	this.constitution = this.sumOf4D6Minus1()
	this.intelligence = this.sumOf4D6Minus1()
	this.wisdom = this.sumOf4D6Minus1()
	this.charisma = this.sumOf4D6Minus1()
}

StandardMethod.prototype.sumOf4D6Minus1 = function () {
	var dices = new Array(4).fill(0)
  
	dices.forEach(function(item, index, dices) {
		dices[index] = rollD6()
	})
  
	dices.sort(function(first, second) {
		return second - first
	})
  
	dices.pop()

	var sum = dices.reduce(function(accumulator, current) {
		return accumulator + current
	})
  
	return sum
}

module.exports = StandardMethod
