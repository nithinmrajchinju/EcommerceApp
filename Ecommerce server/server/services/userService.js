const db = require('../model/model');
const mail = require('../middlewares/nodemailer')
const hash = require('../middlewares/hashGenerator')
const tokens = require('./tokenService')
const bcrypt = require("bcrypt");
require('dotenv').config();

const register = async (req) => {
    return new Promise(async (resolve, reject) => {
        const duplicate = await db.users.findOne({ mail: req.body.mail })
        if (duplicate) {
            reject({ message: 'User Already Exist' })
            return
        }
        const salt = await bcrypt.genSalt(10);
        resolve(new db.users(Object.assign(req.body, {
            password: await bcrypt.hash(req.body.password, salt)
        })).save())
    })
}

const login = async (req) => {
    return new Promise(async (resolve, reject) => {
        const duplicate = await db.users.findOne({ mail: req.body.mail })
        if (!duplicate) {
            reject({ message: 'Invalid Email/Password' })
            return
        }
        const validPassword = await bcrypt.compare(req.body.password, duplicate.password)
        if (!validPassword) {
            reject({ message: 'Invalid Email/Password' })
            return
        }
        resolve(duplicate)  
    })
}

const update = async (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.users.findByIdAndUpdate(req.params.id,req.body,{new: true})) 
    })
}

const deleteId = (req) => {
    return new Promise(async (resolve, reject) => {
        resolve(db.users.findByIdAndUpdate(req.params.id, { status: false },{new: true}))
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
        resolve(db.users.find(filter).skip(xpage).limit(xlimit).sort(sort).populate().exec())
    })
}

const passwordReset = async (req) => {
    return new Promise(async (resolve, reject) => {
        const user = await db.users.findOne({ mail: req.body.mail })
        if (!user) {
            reject("message: 'No user found for this email")
            return
        }
        const savedToken = await new db.tokens({ userid: user._id, createdAt: new Date(), token: hash.hashGenerate() }).save()
        const mailResponse = await mail.sendEmail(user.mail, savedToken.token)
        resolve(mailResponse)
    })
}

const passwordVerify = async (req) => {
    return new Promise(async (resolve, reject) => {
        console.log(req.body)
        const savedtoken = await db.tokens.findOne({ token: req.body.token })
        if (!savedtoken) {
            reject({ message: 'Token expired' })
            return
        }
        if (req.body.password !== req.body.confirmpassword) {
            reject({ message: 'Password doesnot match' })
            return
        }
        const salt = await bcrypt.genSalt(10);
        const updatedUser = await db.users.findByIdAndUpdate(savedtoken.userid, {
            password : await bcrypt.hash(req.body.password, salt)
        }, { new: true })
        resolve(updatedUser)
    })
}

const changePassword = async (req) => {
    return new Promise(async (resolve, reject) => {
       const user = await db.users.findById(req.params.id)
        const validPassword = await bcrypt.compare(req.body.oldpassword, user.password)
        if (!validPassword) {
            reject({ message: 'Old password doesnot matched' })
            return
        }
        if (req.body.newpassword !== req.body.confirmpassword) {
            reject({ message: 'Password does not matched' })
            return 
        }
        const salt = await bcrypt.genSalt(10);
        const updatedUser = await db.users.findByIdAndUpdate(req.params.id, {
            password: await bcrypt.hash(req.body.newpassword, salt)
        })
        resolve(updatedUser)
    })
}

module.exports = {
    register,
    login,
    update,
    deleteId,
    list,
    passwordReset,
    passwordVerify,
    changePassword

}