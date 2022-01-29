const route = require('express').Router()

const controller = require('../controller/customerController')
const file = require('../middlewares/multer');

route.post('/register', controller.register)
route.post('/login', controller.login)
route.get('/read/:id', controller.read)
route.patch('/update/:id', controller.update)
route.delete('/delete/:id', controller.deleteId)
route.post('/resetrequest', controller.resetrequest)
route.post('/resetverify', controller.resetverify)
route.post('/profileimage/:id', file.upload.single('image'), controller.updatePhoto)
route.post('/resetpassword/:id', controller.changePassword)
route.get('/list', controller.list)

module.exports = route;