class Person {
  constructor (name) {
    this.name = name
  }

  say () {
    console.log(`Hi!, I am ${this.name}`)
  }
}

module.exports = Person
