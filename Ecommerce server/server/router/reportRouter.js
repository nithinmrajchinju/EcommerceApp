const route = require('express').Router()

const controller = require('../controller/reportController');

route.get('/product/lowstock', controller.lowStock)
route.get('/product/outofstock', controller.outOfStock)

module.exports = route