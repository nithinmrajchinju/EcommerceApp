const db = require('../model/model');
require('dotenv').config()

const create = async (req) => {
    return new Promise(async (resolve, reject) => {
        let newProduct = await new db.products(req.body)
        if (req.file) {
            newProduct = await new db.products(Object.assign(req.body, {
                productImage: process.env.HOST+req.file.filename
          }))
        }
        resolve(newProduct.save())
    })
}

const read = (req) => {
    return new Promise(async (resolve, reject) => {
        let product = await db.products.findById(req.params.id)
        if (product) resolve(product)
        reject({message: 'not found'})
    })
}

const update = (req) => {
    return new Promise(async (resolve, reject) => {
        let product = await db.products.findById(req.params.id)
        if (!product) {
            reject({ message: 'not found' })
            return
        }
        let newproduct = await db.products.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (req.file) {
            newproduct = await db.products.findByIdAndUpdate(req.params.id, Object.assign(req.body, {
                productImage:  process.env.HOST+req.file.filename,  
            }), { new: true }) 
        }
        resolve(newproduct)
    })
}

const deleteId = (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.products.findByIdAndDelete(req.params.id))
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
        resolve(db.products.find(filter).skip(xpage).limit(xlimit).sort(sort).populate('productCategory').exec())
    }) 
}

module.exports = {
    create,
    read,
    update,
    deleteId,
    list
}