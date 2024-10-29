const express = require("express")
const app = express()
const port = 3000


const tasks = [
  { title : "title 1", description : "description", date_debut : "2024-10-28", date_fin : "2024-10-28", done: true },
  { title : "title 2", description : "description", date_debut : "2024-10-28", date_fin : "2024-10-28", done: true },
  { title : "title 3", description : "description", date_debut : "2024-10-28", date_fin : "2024-10-28", done: true },
  { title : "title 4", description : "description", date_debut : "2024-10-28", date_fin : "2024-10-28", done: true }
]


app.use(express.json())

app.listen(port, () => {
  console.log("App running")
})




app.get('/task', (req, res) => {
  res.json(tasks)
})

app.post('/task', (req, res) => {
  const task = req.body
  tasks.push(task)
  res.status(201).json({message : "Task created ! ", task})
})

app.put('/task/:id', (req, res) => {
  const id = req.params.id
  const task = req.body

  if (id < tasks.length -1) {
    tasks[id] = task
    res.json({message : "Task updated", task})
  } else {
    res.status(404).json({message : "Task not found"})
  }
})

app.delete('/task/:id', (req, res) => {
  const id = req.params.id

  if (id < tasks.length -1) {
    const task = tasks[id]
    tasks.splice(id, 1)
    res.json({message : "Task deleted", task})
  } else {
    res.status(404).json({message : "Task not found"})
  }
})