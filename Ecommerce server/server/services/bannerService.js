const db = require('../model/model');
require('dotenv').config()

const add = async (req) => {
    return new Promise(async (resolve, reject) => {
        if (req.file) {
            const newBanner = await new db.banners({
                name: req.body.name,
                image: process.env.HOST + req.file.filename,
                category: req.body.category
            }).save()
            resolve(newBanner)
            return
        }
        reject({ message: 'No media file found' })
    })
}

const update = (req) => {
    return new Promise(async (resolve, reject) => {
        let banner = await db.banners.findById(req.params.id)
        if (!banner) {
            reject({ message: 'not found' })
            return
        }
        let newBanner = await db.banners.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (req.file) {
            newBanner = await db.banners.findByIdAndUpdate(req.params.id, Object.assign(req.body, {
                image: process.env.HOST + req.file.filename,
            }), { new: true })
        }
        resolve(newBanner)
    })
}

const read = (req) => {
    return new Promise(async (resolve, reject) => {
        let banner = await db.banners.findById(req.params.id)
        if (banner) resolve(banner)
        reject({ message: 'not found' })
    })
}

const deleteId = (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.banners.findByIdAndDelete(req.params.id))
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
        resolve(db.banners.find(filter).skip(xpage).limit(xlimit).sort(sort).populate().exec())
    })
}

module.exports = {
    add,
    read,
    update,
    deleteId,
    list
}