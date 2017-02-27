module.exports = function (req, resp, next) {
  console.log(`[${new Date()}] [${req.method}] ${req.path} [payload: ${JSON.stringify(req.body)}]`)
  next()
}
