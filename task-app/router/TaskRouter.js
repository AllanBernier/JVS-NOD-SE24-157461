const express = require("express")
const Router = express.Router()
const controller = require("../controller/taskController")

Router.get("/task", controller.index)
Router.post("/task", controller.store)
Router.put("/task/:id", controller.update)
Router.delete("/task/:id", controller.delete)

module.exports = Router
