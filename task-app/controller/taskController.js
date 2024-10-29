const controller = {}
const Task = require("../model/Task")


controller.index =  (req, res) => {
  Task.findAll()
  .then( (tasks) => res.json(tasks) )
  .catch( (err) => res.json({error: err.message}) )
}

controller.store = (req, res) => {
  Task.create(req.body)
  .then( (task) => res.json(task) )
  .catch( (err) => res.json({error: err.message}) )
}

controller.update = (req, res) => {
  const id = req.params.id
  Task.update(req.body , { where: {id}})
  .then( (updated) => res.json({updated}) )
  .catch( (err) => res.json({error: err.message}) )
}

controller.delete = (req, res) => {
  const id = req.params.id

  Task.destroy({where : {id}})
  .then( (deleted) => res.json(deleted) )
  .catch( (err) => res.json({error: err.message}) )
}


module.exports = controller