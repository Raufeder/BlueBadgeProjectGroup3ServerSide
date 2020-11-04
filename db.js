const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL ||
    `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/personary`,
     {dialect: "postgres"});

module.exports = db;