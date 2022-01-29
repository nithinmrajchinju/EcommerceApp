const route = require('express').Router()

const controller = require('../controller/categoryController')
const file = require('../middlewares/multer');

route.post('/add', file.upload.single('categoryImage'), controller.add)
route.get('/read/:id', controller.read)
route.patch('/update/:id', file.upload.single('categoryImage'), controller.update)
route.delete('/delete/:id', controller.deleteId)
route.get('/list', controller.list)

module.exports = route