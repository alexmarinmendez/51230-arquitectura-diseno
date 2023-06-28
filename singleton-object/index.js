const firstCash = require('./cash-register')
const secondCash = require('./cash-register')

firstCash.credit(25)
firstCash.credit(35)

secondCash.credit(20)

console.log(firstCash.total())