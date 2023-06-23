const addTwoNumber = require ('./local-modules/add')
const substractTwoNumber = require ('./local-modules/add')

console.log("Hello From index.js")

const sum = addTwoNumber(6,7);
const difference = substractTwoNumber(5,3);
console.log(sum);
console.log(difference);