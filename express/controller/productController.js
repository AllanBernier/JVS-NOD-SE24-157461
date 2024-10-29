// const products = [
//   { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
//   { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
//   { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
//   { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
// ]

const Product = require("../model/product")

const controller = {}

controller.index = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.json(products)
    }).catch((err) => {
      res.status(500).json({ error: err.message })
    })
}
controller.store = (req, res) => {

  Product.create(req.body)
    .then((product) => {
      res.status(201).json({ message: "Product created !" , product })
    }).catch( (err) => {
      res.status(500).json({ error: err.message })
    })
}

controller.update = (req, res) => {

  Product.update(req.body, { where : { id : req.params.id} })
  .then((product) => {
    res.status(201).json({ message: "Product updated !" , product })
  }).catch( (err) => {
    res.status(500).json({ error: err.message })
  })
}
controller.delete = (req, res) => {
  Product.destroy({ where : { id : req.params.id} })
  .then((product) => {
    res.status(201).json({ message: "Product deleted !" , product })
  }).catch( (err) => {
    res.status(500).json({ error: err.message })
  })
}


module.exports = controller