const express = require("express");
const controller = require("../controller/productController")
const Router = express.Router()


Router.get('', controller.index)
Router.post('', controller.store)
Router.put('/:id', controller.update)
Router.delete('/:id',  controller.delete)

module.exports = Router