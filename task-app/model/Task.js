const db = require("../config/db")
const sequelize = require("sequelize") 

const taskSchema = db.define('tasks', 
  {
    id : { type : sequelize.INTEGER, primaryKey : true, autoIncrement : true },
    title :{ type : sequelize.STRING},
    description :{ type : sequelize.STRING},
    date_debut :{ type : sequelize.DATE},
    date_fin :{ type : sequelize.DATE},
    done :{ type : sequelize.BOOLEAN}
  }
)


module.exports = taskSchema