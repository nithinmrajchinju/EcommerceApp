const route = require('express').Router()

const controller = require('../controller/reviewController');

route.post('/add', controller.add)
route.get('/read/:id', controller.read)
route.patch('/update/:id', controller.update)
route.delete('/delete/:id', controller.deleteId)
route.get('/list', controller.list)

module.exports = route