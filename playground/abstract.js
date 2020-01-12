// Références:
// https://coderwall.com/p/r47jlw/advanced-javascript-class-abstract-class-method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
//

var Strategy = function() {
	if(this.constructor === Strategy) {
		throw new Error('Cannot instanciate abstract class')
	}
}

Strategy.prototype.create = function () {
	throw new Error('Cannot call abstract method')
}

var StandardStrategy = function() {
	Strategy.apply(this, arguments)
}

StandardStrategy.prototype = Object.create(Strategy.prototype, {
	'constructor': StandardStrategy
})

var obj

try {
	obj = new Strategy()
} catch (e) {
	console.log(e.message)
}

var obj2 = new StandardStrategy()

try {
	obj2.create()
} catch (e) {
	console.log(e.message)
}

// let's define our concrete method
StandardStrategy.prototype.create = function () {
	console.log('Call Concrete Method')
}

obj2.create() // outputs 'Concrete Method'

console.log('Is obj an instance of StandardStrategy?'
	,obj instanceof StandardStrategy)

console.log('Is obj an instance of Strategy?'
	,obj instanceof Strategy)

try {
	var strategy = obj.__proto__
	strategy.create()
} catch(e) {
	console.log(e.message)
}