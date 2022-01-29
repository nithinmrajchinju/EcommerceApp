const route = require('express').Router()

const controller = require('../controller/orderController')

route.post('/create', controller.create)
route.get('/read/:id', controller.read)
route.patch('/update/:id', controller.update)
route.delete('/delete/:id', controller.deleteId)
route.get('/list', controller.list)

module.exports = route