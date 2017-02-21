const EventEmitter = require('events')

class MyEmitter extends EventEmitter {
  constructor () {
    super()
    setInterval(() => {
      this._emit('yo', {yo: 'yo'})
    }, 1000)
  }
  _emit (msg, data) {
    this.emit(msg, data)
  }
}

module.exports = MyEmitter
