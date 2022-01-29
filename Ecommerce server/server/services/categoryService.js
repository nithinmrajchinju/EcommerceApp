const db = require('../model/model');

const add = async (req) => {
    return new Promise(async (resolve, reject) => {
        let cat = await db.categorys.findOne({ categoryName: req.body.categoryName })
        if (cat) reject( { message: 'Already exist' } )
        resolve( new db.categorys({
            categoryName: req.body.categoryName,
            categoryImage: 'http://localhost:3000/uploads/' + req.file.filename,
            categoryRecommented: req.body.categoryRecommented
        }).save() )
    }) 
}

const read = async (req) => {
    return new Promise(async (resolve, reject) => {
        let cat = await db.categorys.findById(req.params.id)
        if (cat) resolve(cat)
        reject({message: 'not found'})
    })
}

const update = async (req) => {
    return new Promise(async (resolve, reject) => {
        let cat = await db.categorys.findById(req.params.id)
        if (!cat) reject({ message: 'not found' })
        newCat = await db.categorys.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (req.file) {
            newCat = await db.categorys.findByIdAndUpdate(req.params.id, Object.assign(req.body, {
                categoryImage: 'http://localhost:3000/uploads/' + req.file.filename,  
            }), { new: true }) 
        }
        resolve(newCat)
    })
}

const deleteId = (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.categorys.findByIdAndDelete(req.params.id))
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
        resolve(db.categorys.find(filter).skip(xpage).limit(xlimit).sort(sort).populate().exec())
    }) 
}

module.exports = {
    add,
    read,
    update,
    deleteId,
    list
}