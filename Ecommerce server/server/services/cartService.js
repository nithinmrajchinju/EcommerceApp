const db = require('../model/model');

const add = (req) => {
    return new Promise(async (resolve, reject) => {
        const duplicate = await db.carts.findOne({ userId: req.body.userId })
        if (duplicate) {
            reject({ message: 'User Already Exist' })
            return
        }
        resolve(new db.carts(Object.assign(req.body)).save())
    })
}

const read = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.carts.findById(req.params.id))
    })
}

const update = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.carts.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    })
}

const deleteId = (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.carts.findByIdAndDelete(req.params.id))
    })
}

const list = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.carts.findByIdAndUpdate(req.params.id, { $push:{list: req.body} }, { new: true }))
    })
}

const wishList = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.carts.findByIdAndUpdate(req.params.id, { $push:{wishList: req.body} }, { new: true }))
    })
}

module.exports = {
    add,
    read,
    update,
    deleteId,
    list,
    wishList
}