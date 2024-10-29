const express = require("express");
const controller = require("../controller/productController")
const Router = express.Router()

Router.get('', controller.index)
Router.get('/:id', controller.show)
Router.get('/edit/:id', controller.edit)
Router.get('/create', controller.create)
Router.post('', controller.store)
Router.post('/:id',  controller.delete)
Router.put('/:id', controller.update)


module.exports = Router