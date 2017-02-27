const http = require('http')
const PORT = 3000

const serverRoutes = {
  'GET': [
    {
      path: '/',
      handler: (req, resp, body) => {
        fs.readFile('./index.html', (err, html) => {
          if (err) throw err
          else {
            resp.writeHeader(200, {'Content-Type': 'text/html'})
            resp.end(html)
          }
        })
      }
    },
    {
      path: '/yo', handler: (req, resp, body) => { resp.end(`yo ${body} `) }
    }
  ]
}

// Class: http.Server
var srv = http.createServer()

srv.listen(1000, () => {})
srv.listen(PORT, '127.0.0.1', () => {
  console.log(`HTTP server listening on port ${srv.address().address}:${srv.address().port}`)
})

srv.on('request', (req, res) => {
  // req: http.IncomingMessage
  // res: http.ServerResponse

  console.log(req.method)
  console.log(req.headers)
  console.log(req.url)

  if (serverRoutes[req.method]) {
    let index = serverRoutes[req.method].map((o) => o.path).indexOf(req.url)
    if (index > -1) {
      let body = []
      req.on('data', (chunk) => { body.push(chunk) })
      req.on('end', () => {
        serverRoutes[req.method][index].handler(req, res, body.toString())
      })
    } else {
      req.destroy()
    }
  } else {
    req.destroy()
  }
})

// examples :
// curl -X GET  -i "http://localhost:3000"
// curl -X POST -H "Content-Type: application/json" -d '{"yo": "yo"}'  -i "http://localhost:3000"
