const mongoose = require("mongoose")
const express = require("express")
const app = express()
require("dotenv").config()
const productRouter = require("./router/productRouter") 
const taskRouter = require("./router/taskRouter") 



app.listen(process.env.SERVER_PORT, () => {
  console.log("App running on port " + process.env.SERVER_PORT)

  mongoose.connect(process.env.DB_URI)
    .then((res) => {
      console.log(res)
      console.log("Connected to mongo")
    }).catch((err) => {
      console.log(err)
    })
})

app.use(express.json())
app.use("/product", productRouter)
app.use("/task", taskRouter)