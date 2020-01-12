const assert = require('assert')

const StandardMethod = require('../services/ability-scores-service/standard-method')

describe('Ability Score Service - StandardMethod', function() {
	describe('# Instance of StandardMethod', function() {
		it('should be an instance of StandardMethod', function() {
			var sm = new StandardMethod()
			
			assert.ok(sm instanceof StandardMethod)
		})
	})
})