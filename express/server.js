const express = require("express")
const app = express()
const Router = require("./router/productRouter")
require('dotenv').config()
const port = process.env.SERVER_PORT || 3000

app.use(express.json())
app.listen( port,() => {
  console.log(process)

  console.log(`App listening on port ${port}`)
})

app.use("/product", Router)



// const middleware = (req, res, next) => {

//   if (req.body.name != undefined) {
//     req.isworking = true
//     return next()
//   }

//   res.send("Stopped by middleware")
// }



// app.post("/hello-world", middleware,  (req, res) => {
  
//   console.log(req.isworking)
//   res.send("Welcome !")
// })


