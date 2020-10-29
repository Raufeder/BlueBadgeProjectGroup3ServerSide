const { DataTypes } = require('sequelize');
const db = require('../db');

const Character = db.define('character', {
    title: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  });

module.exports = Character