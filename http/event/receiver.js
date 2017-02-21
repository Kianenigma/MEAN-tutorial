const Emitter = require('./emitter')

let myEmitter = new Emitter()
myEmitter.on('yo', (data) => {
  console.log('he said', data)
})
