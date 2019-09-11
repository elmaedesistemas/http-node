const store = require('./store')

const addChat = (users) => {
  if (!users || !Array.isArray(users)) {
    return Promise.reject('Invalid user list')
  }

  const chat = {
    users
  }
  return store.add(chat)
}

const getChats = (userId) => {
  return store.get(userId)
}

module.exports = {
  addChat,
  getChats
}
