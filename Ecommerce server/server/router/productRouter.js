const route = require('express').Router()

const controller = require('../controller/productController')
const file = require('../middlewares/multer');

route.post('/create', file.upload.single('image'), controller.create)
route.get('/read/:id', controller.read)
route.patch('/update/:id', file.upload.single('image'), controller.update)
route.delete('/delete/:id', controller.deleteId)
route.get('/list', controller.list)

module.exports = route