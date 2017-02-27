let express = require('express')
let bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use(require('./logger.middleware'))
app.get('/', (req, resp) => {
  // things we have in request object
  console.log(`base url ${req.baseUrl}`)
  console.log(`body ${JSON.stringify(req.body)}`)
  console.log(`ip ${req.ip}`)
  console.log(`cookies ${req.cookies}`)
  console.log(`method ${req.method}`)
  console.log(`path ${req.path}`)
  console.log(`query ${JSON.stringify(req.query)}`)

  // test :
  // curl -X GET -H "Content-Type: application/json" -d '{"yo": "yo"}'  -i "http://localhost:3000"

  // complete info: http://expressjs.com/en/4x/api.html

  // / things we can do with the response
  // send a html (or any other) file
  resp.sendFile(__dirname + '/index.html')
})

app.post('/yo', (req, resp) => {
  if (req.body.yo === 'yo') {
    resp.status(200).json({data: 'ok'})
  } else {
    resp.status(400).end('go to hell')
  }
})

// anything else will be redirected to home page
// or a 404 not found page
app.use((req, resp) => {
  // any Idea how this works?
  // Know the locaion header? 
  resp.redirect('/')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
