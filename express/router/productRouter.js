const express = require("express");
const controller = require("../controller/productController")
const Router = express.Router()
const productRequest = require("../middleware/ProductRequest")


Router.get('', controller.index)
Router.get('/:id', controller.show)
Router.post('', controller.store)
Router.put('/:id', controller.update)
Router.delete('/:id',  controller.delete)

module.exports = Router