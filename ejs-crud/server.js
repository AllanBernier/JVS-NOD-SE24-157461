const express = require("express")
const app = express()
const productRouter = require("./router/productRouter")
require("dotenv").config()
const bodyParser = require('body-parser');
// const cors = require("cors")

app.listen(3000, () => {
  console.log('App listening on port 3000')
})


// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs")
app.set("views", "./views")
app.use('/product', productRouter)
