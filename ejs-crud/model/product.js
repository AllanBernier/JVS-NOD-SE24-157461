const sequelize = require("sequelize")
const db = require("../config/db")

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
