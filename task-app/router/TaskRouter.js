const express = require("express")
const Router = express.Router()
const controller = require("../controller/taskController")
const taskRequest = require("../middleware/taskRequest")

Router.get("/task", controller.index)
Router.post("/task",taskRequest, controller.store)
Router.put("/task/:id",taskRequest, controller.update)
Router.delete("/task/:id", controller.delete)

module.exports = Router
