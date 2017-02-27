const http = require('http')
const fs = require('fs')
const PORT = 3000

// Class: http.Server
var srv = http.createServer()

srv.listen(PORT, '127.0.0.1', () => {
  console.log(`HTTP server listening on port ${srv.address().address}:${srv.address().port}`)
})

// curl -X GET  -i "http://localhost:3000"
// curl -X POST -H "Content-Type: application/json" -d '{"yo": "yo"}'  -i "http://localhost:3000"
srv.on('request', (req, res) => {
  // Class: http.IncomingMessage
  console.log(req.method)
  console.log(req.headers)
  console.log(req.url)

  let body = []
  req.on('data', (chunk) => {
    body.push(chunk)
  })
  req.on('end', () => {
    var req_data = JSON.parse(body.toString())
  })

  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('okay')
})
