const express = require("express")
const Router = express.Router()
const controller = require("../controller/TaskController")

Router.get("", controller.index)
Router.post("", controller.store)
Router.put("/:id", controller.update)
Router.delete("/:id", controller.delete)


module.exports = Router