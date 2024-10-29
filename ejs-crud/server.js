const express = require("express")
const app = express()
const productRouter = require("./router/productRouter")


app.use(express.json())
app.listen(3000, () => {
  console.log('App listening on port 3000')
})

app.set("view engine", "ejs")
app.set("views", "./views")
app.use('/product', productRouter)
