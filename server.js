const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('config')
const router = require('./router')

const SERVER_PORT = process.env.SERVER_PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(express.static(__dirname + '/client/dist'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public'))
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

mongoose.connect(config.get('mongoUri'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(response => console.log('connected')).catch(e => console.log(e))

app.listen(SERVER_PORT, () => console.log(`server started on ${SERVER_PORT}`))