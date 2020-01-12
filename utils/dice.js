var rollD6 = function () {
	return roll(6)
}

var rollD8 = function () {
	return roll(8)
}

var rollD10 = function () {
	return roll(10)
}

var rollD20 = function () {
	return roll(20)
}

var roll =  function (value) {
	return (Math.floor(Math.random() * Math.floor(value))) + 1
}

module.exports = {
	rollD6,
	rollD8,
	rollD10,
	rollD20
}