const Product = require("../model/Product")
const controller = {}


controller.index = (req, res) => {

}
controller.store = (req, res) => {

  Product.create(req.body)
  .then( (product) => res.status(201).json({product}) )
  .catch( (err) => res.status(403).json({error : err.message}) )
}

controller.update = (req, res) => {

}

controller.delete = (req, res) => {

}

module.exports = controller