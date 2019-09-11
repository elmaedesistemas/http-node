'use strict'

const express = require('express')
const app = express()
const server = require('http').Server(app)

const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')
const routes = require('./network/routes')
const socket = require('./socket')

db('mongodb+srv://dmejia:carpeDiem1204@telegram-buiqg.mongodb.net/test?retryWrites=true&w=majority')

app.use(cors())
app.use(bodyParser.json())

socket.connect(server)
routes(app)

app.use('/app', express.static('public'))

server.listen(3001, () => {
  console.log('The application is listen in http://127.0.0.1:3000')    
})
