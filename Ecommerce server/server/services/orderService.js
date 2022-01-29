const db = require('../model/model')

const create = async (req) => {
    return new Promise(async (resolve, reject) => {
        const duplicate = await db.orders.findOne({ orderId: req.body.orderId })
        if (duplicate) {
            reject({ message: 'Order Already Exist' })
            return
        }
        resolve(new db.orders(Object.assign(req.body)).save())
    })
}

const read = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.orders.find({ orderId: req.params.id }))
    })
}

const update = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.orders.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    })
}

const deleteId = (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.orders.findByIdAndUpdate(req.params.id, { orderStatus: false }, { new: true }))
    })
}

const list = (req) => {
    return new Promise(async (resolve, reject) => {
        let filter = req.query.filter
        let page = req.query.page
        let limit = req.query.limit
        let xpage = page && limit ? (parseInt(req.query.page) - 1) * parseInt(req.query.limit) : undefined
        let xlimit = page && limit ? parseInt(req.query.limit) : undefined
        let sort = req.query.sort
        resolve(db.orders.find(filter).skip(xpage).limit(xlimit).sort(sort).populate().exec())
    }) 
}

module.exports = {
    create,
    read,
    update,
    deleteId,
    list
}