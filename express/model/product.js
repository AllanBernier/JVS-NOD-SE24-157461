const sequelize = require("sequelize")
const db = require("../config/db")

// npm i sequelize sqlite3

const productSchema = db.define(
  "products",
  {
    id : { type : sequelize.INTEGER, 
        primaryKey : true, 
        autoIncrement : true 
      },
    name : { type : sequelize.STRING },
    description : { type : sequelize.STRING },
    quantity : { type : sequelize.INTEGER },
    price : { type : sequelize.INTEGER },
  }
)

module.exports = productSchema
