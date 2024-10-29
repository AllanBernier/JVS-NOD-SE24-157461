const controller = {}

const tasks = [
  { title : "title 1", description : "description", date_debut : "2024-10-28", date_fin : "2024-10-28", done: true },
  { title : "title 2", description : "description", date_debut : "2024-10-28", date_fin : "2024-10-28", done: true },
  { title : "title 3", description : "description", date_debut : "2024-10-28", date_fin : "2024-10-28", done: true },
  { title : "title 4", description : "description", date_debut : "2024-10-28", date_fin : "2024-10-28", done: true }
]


controller.index =  (req, res) => {
  res.json(tasks)
}

controller.store = (req, res) => {
  const task = req.body

  tasks.push(task)
  res.status(201).json({message : "Task created ! ", task})
}

controller.update = (req, res) => {
  const id = req.params.id
  const task = req.body

  if (id < tasks.length -1) {
    tasks[id] = task
    res.json({message : "Task updated", task})
  } else {
    res.status(404).json({message : "Task not found"})
  }
}

controller.delete = (req, res) => {
  const id = req.params.id

  if (id < tasks.length -1) {
    const task = tasks[id]
    tasks.splice(id, 1)
    res.json({message : "Task deleted", task})
  } else {
    res.status(404).json({message : "Task not found"})
  }
}


module.exports = controller