const route = require('express').Router()

const controller = require('../controller/cartController')

route.post('/add', controller.add)
route.get('/read/:id', controller.read)
route.patch('/update/:id', controller.update)
route.delete('/delete/:id', controller.deleteId)
route.post('/list/:id', controller.list)
route.post('/wishlist/:id', controller.wishList)

module.exports = route