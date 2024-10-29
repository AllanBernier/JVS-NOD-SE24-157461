const express = require("express")
const app = express()
const port = 3000
const Router = require("./router/productRouter")

app.use(express.json())
app.listen( port,() => {
  console.log(`App listening on port ${port}`)
})

app.use("/product", Router)


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
