const db = require('../model/model');

const deleteToken = (token)=>{
    db.tokens.deleteOne({token}).then(
        console.log('token expired...')
    )
}

module.exports = {
    deleteToken
}