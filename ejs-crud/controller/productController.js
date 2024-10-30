const Product = require("../model/product")
const controller = {}
const url = require("url")


controller.index = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.render('index', { products })
    }).catch((err) => {
      res.status(500).json({ error: err.message })
    })
}

controller.show = async(req, res) => {
  try {
    const product = await Product.findByPk(req.params.id)     
    res.render('show', {product})

  } catch (error) {
    res.redirect("/product")
  }
}

controller.edit = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.render("edit", {product})
      
  } catch (error) {
    console.log(error)
    res.redirect("/product")
  }
}

controller.create = (req, res) => {
  res.render('create', { product : req.query})
}

controller.store = (req, res) => {
  const { name, price, description, quantity } = req.body
  if (name === "" || price === "" || description === "" || quantity === ""){
    return res.redirect(url.format({
      pathname : "/product/create",
      query: { name, price, description, quantity }
    }))
  }

  Product.create(req.body)
    .then((product) => {
      res.redirect(`/product/${product.id}`)
    }).catch((err) => {
      res.redirect("/create",)
    })
}

controller.update = (req, res) => {

  Product.update(req.body, { where: { id: req.params.id } })
    .then(() => {
      res.redirect('/product')
    }).catch((err) => {
      res.status(500).json({ error: err.message })
    })
}
controller.delete = (req, res) => {
  Product.destroy({ where: { id: req.params.id } })
    .then((product) => {
      res.status(201).redirect('/product')
    }).catch((err) => {
      res.status(500).json({ error: err.message })
    })
}


module.exports = controller