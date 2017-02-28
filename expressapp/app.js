let express = require('express')
let bodyParser = require('body-parser')
let app = express()

// ------ global middlewares
app.use(require('./logger.middleware'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/client'))

// ------- Database Config
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mean')
let db = mongoose.connection
db.on('error', (err) => { console.log('error with db', err) })
db.once('open', function () {
  console.log('DB Connected')
})

const Schema = mongoose.Schema

const TaskSchema = new Schema({
  title: { type: String, require: true},
  done: {type: Boolean}
})

let TaskModel = mongoose.model('TaskModel', TaskSchema)

// ---------

app.get('/', (req, resp) => {
  resp.sendFile(__dirname + '/client/index.html')
})

app.post('/task', (req, resp) => {
  console.log(req.body)
  let aTask = new TaskModel({
    title: req.body.title,
    done: false
  })

  aTask.save((err) => {
    if (err) throw err
    else resp.status(201).json({taskId: aTask._id})
  })
})

app.get('/task', (req, resp) => {
  TaskModel.find({}, (err, tasks) => {
    if (err) throw err
    else resp.json(tasks)
  })
})

app.put('/task/:taskId', (req, resp) => {
  TaskModel.findById(req.params.taskId, (err, aTask) => {
    if (err) throw err
    else {
      aTask.title = req.body.title
      aTask.done = req.body.done
      aTask.save((err) => {
        if (err) throw err
        else resp.json({taskId: aTask._id})
      })
    }
  })
})

app.delete('/task/:taskId', (req, resp) => {
  TaskModel.findById(req.params.taskId, (err, aTask) => {
    if (err) throw err
    else {
      aTask.remove((err) => {
        if (err) throw err
        else resp.json({})
      })
    }
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
