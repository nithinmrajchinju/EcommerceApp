const db = require('../model/model');
const hash = require('../middlewares/hashGenerator');
const bcrypt = require("bcrypt");

const create = async (req) => {
    return new Promise(async (resolve, reject) => {
        const duplicate = await db.admins.findOne({ mail: req.body.mail })
        if (duplicate) {
            reject({ message: 'Admin Already Exist' })
            return
        }
        const salt = await bcrypt.genSalt(10);
        resolve(new db.admins(Object.assign(req.body, {
            password : await bcrypt.hash(req.body.password, salt) 
        })).save())
    })
    
}

const read = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.admins.findById(req.params.id)) 
    })
}

const update = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.admins.findByIdAndUpdate(req.params.id,req.body,{new: true})) 
    })
}

const deleteId = (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.admins.findByIdAndUpdate(req.params.id, { status: false },{new: true}))
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
        resolve(db.admins.find(filter).skip(xpage).limit(xlimit).sort(sort).populate().exec())
    }) 
}

const changePassword = async (req) => {
    return new Promise(async (resolve, reject) => {
       const admin = await db.admins.findById(req.params.id)
        const validPassword = await bcrypt.compare(req.body.oldpassword, admin.password)
        if (!validPassword) {
            reject({ message: 'Old password doesnot matched' })
            return
        }
        if (req.body.newpassword !== req.body.confirmpassword) {
            reject({ message: 'Password does not matched' })
            return 
        }
        const salt = await bcrypt.genSalt(10);
        const updatedAdmin = await db.admins.findByIdAndUpdate(req.params.id, {
            password: await bcrypt.hash(req.body.newpassword, salt)
        })
        resolve(updatedAdmin)
    })
}

module.exports = {
    create,
    read,
    update,
    deleteId,
    list,
    changePassword
}