function up (str) {
  return str.toUpperCase()
}

function mul (x, y) {
  return x * y
}

module.exports = 'foo'
module.exports = {
  mul: mul,
  up: up
}
