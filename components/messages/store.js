'use strict'

const model = require('./model')

const addMessage = (message) => {
    const myMessage = new model(message)
    myMessage.save()
}

async function getMessage (filterUser) {

    let filter = {}

    if(filterUser !== null){
        filter == { user: filterUser }
    }
    const messages = await model.find( filter )
    return messages
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