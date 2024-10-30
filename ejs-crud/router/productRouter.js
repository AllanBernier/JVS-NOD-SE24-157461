const express = require("express");
const controller = require("../controller/productController")
const Router = express.Router()

Router.get('', controller.index)
Router.get('/create', controller.create)
Router.get('/:id', controller.show)
Router.get('/edit/:id', controller.edit)
Router.post('', controller.store)
Router.post('/edit/:id', controller.update)
Router.post('/:id',  controller.delete)


module.exports = Router