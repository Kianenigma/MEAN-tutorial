let util = require('./Utilities.js')

console.log(util.up('yo'))

const PersonClass = require('./obj/person.class')
const PersonFN = require('./obj/person.fn')

let p1 = new PersonClass('kian')
let p2 = new PersonFN('asqar')
let singletonPerson = require('./obj/person.module')

console.log(p1)
console.log(p2)
console.log(singletonPerson)

p1.say()
p2.say()
singletonPerson.say()
singletonPerson.setName('THE ONE AND ONLYYYY')
require('./dummy')
