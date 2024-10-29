const express = require("express");
const controller = require("../controller/productController")
const Router = express.Router()
const productRequest = require("../middleware/ProductRequest")


Router.get('', controller.index)
Router.post('', productRequest,  controller.store)
Router.put('/:id',productRequest,  controller.update)
Router.delete('/:id',  controller.delete)

module.exports = Router