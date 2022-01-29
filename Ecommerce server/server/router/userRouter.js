const route = require('express').Router()

const controller = require('../controller/userController')

route.post('/register',  controller.register)
route.post('/login',  controller.login)
route.patch('/update/:id',  controller.update)
route.delete('/delete/:id', controller.deleteId)
route.get('/list', controller.list)
route.post('/resetrequest', controller.resetrequest)
route.post('/resetverify', controller.resetverify)
route.post('/resetpassword/:id', controller.changePassword)

module.exports = route;