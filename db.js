const db = require('mongoose')

db.Promise = global.Promise

async function connect (url) {
    // mongodb+srv://dmejia:carpeDiem1204@telegram-buiqg.mongodb.net/test?retryWrites=true&w=majority
    await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
        })
    console.log('[db] connected succesfully')
}

module.exports = connect