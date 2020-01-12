// const AbilityFactory = require('./factories/CharacterFactory')
// const CharacterFactory = require('./factories/CharacterFactory')

// var abilityFactory = new AbilityFactory()
// var characterFactory = new CharacterFactory(abilityFactory)
// var character = characterFactory.create()
// console.log(JSON.stringify(character.init()))

const StandardMethod = require('./services/ability-scores-service/standard-method')

var method = new StandardMethod()
// method.create()
console.log(JSON.stringify(method))