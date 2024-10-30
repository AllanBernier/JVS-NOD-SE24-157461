const sequelize = require("sequelize");

// Utilisez un dialecte par défaut si la variable d'environnement n'est pas définie

const db = new sequelize({
  dialect: process.env.DB_DIALECT || 'sqlite',
  storage: process.env.DB_STORAGE || 'db.sqlite'
});

db.sync();

module.exports = db;