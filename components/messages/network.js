'use strict'

const express = require('express')
const multer = require('multer')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

const upload = multer({
  dest: 'uploads/'
})

router.get('/', (req, res) => {
  const filterMessages = req.query.chat || null

  controller.getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500, e)
    })
})

router.post('/', upload.single('file'), (req, res) => {
  controller.addMessages(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201)
    }).catch(e => {
      response.error(req, res, 'Invalid Information', 400, 'Error in Controller', e)
    })
})

router.patch('/:id', (req, res) => {
  controller.updateMessages(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200)
    }).catch(e => {
      response.error(req, res, 'Internal Error', 500, e)
    })
})

router.delete('/:id', (req, res) => {
  controller.deletedMessages(req.params.id, req.body.message)
    .then(() => {
      response.success(req, res, `User ${req.params.id} deleted`, 200)
    }).catch(e => {
      response.error(req, res, 'Internal Error', 500, e)
    })
})  
module.exports = router
