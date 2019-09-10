'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')

// const router = require('./components/messages/network')
const routes = require('./network/routes')

db('mongodb+srv://dmejia:carpeDiem1204@telegram-buiqg.mongodb.net/test?retryWrites=true&w=majority')

const app = express()
app.use(bodyParser.json())
// app.use(routes)

routes(app)

app.use('/app', express.static('public'))

app.listen(3000)
console.log('The application is listen in http://127.0.0.1:3000')