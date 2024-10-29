const products = [
  { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
  { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
  { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
  { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
]


const controller = {}

controller.index = (req, res) => { 
  res.json(products)
}
controller.store = (req, res) => {

  const product = {
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description,
  }

  products.push(product)

  res.status(201).json({ message: "Product created !" })
}

controller.update = (req, res) => {

  const id = req.params.id
  const product = {
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description,
  }
  if (products.length - 1 < id) {
    return res.status(404).json({ message: "product not found" })
  }
  products[id] = product
  res.json({ message: "Product updated" })
}
controller.delete = (req, res) => {

  const id = req.params.id
  if (products.length - 1 < id) {
    return res.status(404).json({ message: "product not found" })
  }
  products.splice(id, 1)
  res.json({ message: "Product deleted" })
}


module.exports = controller