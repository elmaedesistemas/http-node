const model = require('./model')

const addChats = (chat) => {
  const myChat = new model(chat)
  return myChat.save()
}

const getChats = (userId) => {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (userId) {
      filter = {
        users: userId
      }
    }
    model.find(filter)
      .populate('users')
      .exec((err, populated) => {
        if (err) {
          reject(err)
          return false
        }
        resolve(populated)
      })
  })
}

module.exports = {
  add: addChats,
  get: getChats
}
