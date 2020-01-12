const assert = require('assert')

const rollD6 = require('../../utils/dice').rollD6
const rollD8 = require('../../utils/dice').rollD8
const rollD10 = require('../../utils/dice').rollD10
const rollD20 = require('../../utils/dice').rollD20

describe('Utils - Dice', function() {
	describe('# Roll a D6 - 100 tests', function() {
		it('should return a value beetween 1-6', function() {
			testDice(rollD6, 0, 6)
		})
	}),
	describe('# Roll a D8 - 100 tests', function() {
		it('should return a value beetween 1-8', function() {
			testDice(rollD8, 0, 8)
		})
	}),
	describe('# Roll a D10 - 100 tests', function() {
		it('should return a value beetween 1-10', function() {
			testDice(rollD10, 0, 10)
		})
	}),
	describe('# Roll a D20 - 100 tests', function() {
		it('should return a value beetween 1-20', function() {
			testDice(rollD20, 0, 20)
		})
	})
})

function testDice(fn, min, max) {
	var dices = Array(100).fill(0)
	dices.forEach(function (value, index, dices) {
		dices[index] = fn()
	})
	dices.forEach(function(value) {
		assert.ok(value > min)
		assert.ok(value <= max)
	})
}