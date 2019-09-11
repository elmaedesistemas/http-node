const model = require('./model')

const addUser = (user) => {
  const myUser = new model(user)
  return myUser.save()
}

const getUser = () => {
  return model.find()
}

module.exports = {
  add: addUser,
  list: getUser
}