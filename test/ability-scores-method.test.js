const assert = require('assert')

const AbilityScoresMethod = require('../services/ability-scores-service/ability-scores-method')
const StandardMethod = require('../services/ability-scores-service/standard-method')

describe('Ability Score Service - AbilityScoresMethod', function() {
	describe('# User cannot instantiate abstract class', function() {
		it('should return error message', function() {
			assert.throws( function () {
				new AbilityScoresMethod()
			}, Error )
		})
	}),
	describe('# Instance of AbilityScoresMethod', function() {
		it('should be an instance of AbilityScoresMethod', function() {
			var sm = new StandardMethod()

			assert.ok(sm instanceof StandardMethod)
			assert.ok(sm.__proto__ instanceof AbilityScoresMethod)
		})
	}),
	describe('# Attributes are set', function() {
		it('should be set to 0', function() {
			var sm = new StandardMethod()

			assert.ok(sm instanceof StandardMethod)
			assert.ok(sm.__proto__ instanceof AbilityScoresMethod)
			assert.ok(sm.strength === 0)
			assert.ok(sm.dexterity === 0)
			assert.ok(sm.constitution === 0)
			assert.ok(sm.intelligence === 0)
			assert.ok(sm.wisdom === 0)
			assert.ok(sm.charisma === 0)
		})
	})
})