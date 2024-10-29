const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String,required: true },
  date_debut: { type: Date },
  date_fin: { type: Date },
  done: { type: Boolean,required: true }
})

module.exports = mongoose.model('tasks', TaskSchema)