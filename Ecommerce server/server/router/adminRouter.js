const route = require('express').Router()

const controller = require('../controller/adminController');

route.post('/create', controller.create)
route.get('/read/:id', controller.read)
route.patch('/update/:id', controller.update)
route.delete('/delete/:id', controller.deleteId)
route.get('/list', controller.list)
route.post('/resetpassword/:id', controller.changePassword)

module.exports = route