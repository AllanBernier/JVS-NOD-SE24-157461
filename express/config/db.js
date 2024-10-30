const sequelize = require("sequelize");
// Utilisez un dialecte par défaut si la variable d'environnement n'est pas définie
const dialect = process.env.DB_DIALECT || 'sqlite';


const db = new sequelize({
  dialect: dialect,
  storage: process.env.DB_STORAGE || "db.sqlite"
});

db.sync();

module.exports = db;