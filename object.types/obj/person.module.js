// no way for other files to access this
let _private = 'secret'
let name = 'the one and only kian'

let Person = {
  // note: there is a new syntax for this. check it out
  setName: (aName) => { name = aName },
  say: () => {
    console.log(`Hi!, I am ${name}`)
  }
}

module.exports = Person
