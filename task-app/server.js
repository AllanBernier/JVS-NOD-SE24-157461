const express = require("express")
const app = express()
const port = 3000
const Router = require("./router/TaskRouter")

app.use(express.json())

app.listen(port, () => {
  console.log("App running")
})

app.use(Router)
