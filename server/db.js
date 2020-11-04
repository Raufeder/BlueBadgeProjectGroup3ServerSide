const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.Db, process.env.DB_USER, process.env.DB_PASS, {dialect: "postgres"});

module.exports = db;