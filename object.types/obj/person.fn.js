function Person (name) {
  this.name = name
  console.log(this)
  let _private = 'secret'
  this.say = function () {
    console.log(`Hi!, I am ${this.name}`)
  }
}

module.exports = Person
