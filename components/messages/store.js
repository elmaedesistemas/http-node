'use strict'

const model = require('./model')

const addMessage = (message) => {
  const myMessage = new model(message)
  myMessage.save()
}

async function getMessage (filterChat) {

  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterChat !== null) {
      filter == { chat: filterChat }
    }
    model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error)
          return false
        }
        resolve(populated)
      })
  })
}

async function updateText (id, message) {
  const foundMessage = await model.findById({
    _id: id
  })

  foundMessage.message = message
  const newMessage = await foundMessage.save()
  return newMessage
}

const deletedMessages = (id) => {
  return model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addMessage,
  list: getMessage,
  update: updateText,
  deleted: deletedMessages
}