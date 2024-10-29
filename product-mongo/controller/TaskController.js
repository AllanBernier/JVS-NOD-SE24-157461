const Task = require("../model/Task")
const controller = {}

controller.index = (req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(403).json({ error: err.message }))
}
controller.store = (req, res) => {
  Task.create(req.body)
    .then((task) => res.json(task))
    .catch((err) => res.status(403).json({ error: err.message }))
}
controller.update = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
  .then((task) => res.json(task))
  .catch((err) => res.status(403).json({ error: err.message }))
 }
controller.delete = (req, res) => {
  Task.findByIdAndDelete(req.params.id)
  .then((task) => res.json(task))
  .catch((err) => res.status(403).json({ error: err.message }))
 }

module.exports = controller