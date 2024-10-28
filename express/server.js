const express = require("express")
const app = express();
const port = 3000


app.use(express.json())
app.listen( port,() => {
  console.log(`App listening on port ${port}`)
})


// app.get('/', (req, res) => {
//   console.log("Hello world")
//   res.send("Hello from express")
// })


// app.get('/user/:id', (req, res) => {
//   console.log(req.params.id)
//   res.send("Page for user id :" + req.params.id)
// })


// app.get('/product',(req, res) => {
//   let product = req.query
//   console.log(product)
//   res.send(product)
// })


// app.get('/product/store', (req, res) => {
//   res.status(201).send("Product Created")
// })





// GET POST PUT DELETE
// CRUD

// CREATE, READ, UPDATE, DELETE
const products = [
  { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
  { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
  { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
  { name: "Souris", price: 25, quantity : 125, description : "Super souris" },
]

app.get('/product', (req, res) => {
  res.json(products)
})

app.post('/product', (req, res) => {

  const product = {
    name : req.body.name,
    price : req.body.price,
    quantity : req.body.quantity,
    description : req.body.description,
  }

  products.push(product)

  res.status(201).json({message: "Product created !"})
})

app.put('/product/:id', (req, res) => {
  const id = req.params.id
  const product = {
    name : req.body.name,
    price : req.body.price,
    quantity : req.body.quantity,
    description : req.body.description,
  }
  if (products.length -1 < id) {
    return res.status(404).json({message : "product not found"})
  }
  products[id] = product
  res.json({message : "Product updated"})
})

app.delete('/product/:id', (req, res) => {
  const id = req.params.id
  if (products.length -1 < id) {
    return res.status(404).json({message : "product not found"})
  }
  products.splice(id, 1)
  res.json({message : "Product deleted"})
})