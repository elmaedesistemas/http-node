'use strict'

const store = require('./store')

const addMessages = (user, message) => {
    return new Promise((resolve, reject) => {
      if(!user || !message) {
          console.error('[MESSAGE_CONTROLLER] The user or message not exist.')
          return reject('Wrong Data! :(')
      }
        console.log(user)
        console.log(message)
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
    
        store.add(fullMessage)
        resolve(fullMessage)
    })
 
}

const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => resolve(store.list(filterUser)))
} 

const updateMessages = (id, message) => {
    return new Promise( async (resolve, reject) => {
        if(!id || !message){
            reject('Invalid Data! :(')
            return false
        }

       const result = await store.update(id, message)
       resolve(result)
    })
}

const deletedMessages = (id) => {
    return new Promise((resolve, reject) => {
        if (!id){
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