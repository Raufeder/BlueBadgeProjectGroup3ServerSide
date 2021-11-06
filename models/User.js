const { DataTypes } = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
    passwordhash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url_userimage: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = User;