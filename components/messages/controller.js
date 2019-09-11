'use strict'

const store = require('./store')
const socket = require('../../socket').socket

const addMessages = (chat, user, message) => {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[MESSAGE_CONTROLLER] The user, chat or message not exist.')
      reject('Wrong Data! :(')
      return false
}

    let fileUrl = ''
    if (file) {
      fileUrl = `http://127.0.0.1:3000/app/files/${file.filename}`
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl
    }

    store.add(fullMessage)
    socket.emit('message', fullMessage)
    resolve(fullMessage)
  })
}

const getMessages = (filterChat) => {
  return new Promise((resolve, reject) => resolve(store.list(filterChat)))
} 

const updateMessages = (id, message) => {
  return new Promise( async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid Data! :(')
      return false
    }

    const result = await store.update(id, message)
    resolve(result)
  })
}

const deletedMessages = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid Params')
      return false
    }

    store.deleted(id)
      .then(() => {
        resolve()
      })
      .catch(e => {
        reject(e)
      })
  })
}
module.exports = {
  addMessages,
  getMessages,
  updateMessages,
  deletedMessages
}