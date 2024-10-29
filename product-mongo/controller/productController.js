const Product = require("../model/Product")
const controller = {}


controller.index = (req, res) => {
  Product.find()
  .then( (products) => res.json(products))
  .catch( (err) => res.status(403).json({error : err.message}) )
}
controller.store = (req, res) => {

  Product.create(req.body)
  .then( (product) => res.status(201).json({product}) )
  .catch( (err) => res.status(403).json({error : err.message}) )
}

controller.update = (req, res) => {
  Product.updateOne({ _id : req.params.id }, req.body)
  .then( (result) => res.json({message : result}) )
  .catch( (err) => res.status(403).json({error : err.message}) )
}

controller.delete = (req, res) => {
  Product.deleteOne({ _id : req.params.id })
  .then( (result) => res.json({message : result}) )
  .catch( (err) => res.status(403).json({error : err.message}) )
}

module.exports = controller