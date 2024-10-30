const sequelize = require("sequelize")
const db = require("../config/db")

const productSchema = db.define(
  "products",
  {
    id : { type : sequelize.INTEGER, 
        primaryKey : true, 
        autoIncrement : true 
      },
    name : { type : sequelize.STRING, allowNull : false },
    description : { type : sequelize.STRING, allowNull : false },
    quantity : { type : sequelize.INTEGER, allowNull : false },
    price : { type : sequelize.INTEGER, allowNull : false },
  }
)

module.exports = productSchema
