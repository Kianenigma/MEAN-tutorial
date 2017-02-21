
class Person {
  constructor (name) {
    this.name = name
    this.private = 'not possible'
  }

  say () {
    console.log(`Hi!, I am ${this.name}`)
  }
}

module.exports = Person
