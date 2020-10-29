const User = require("./User");
const Character = require("./Character");

// Setup Associations
User.hasMany(Character, {
  onDelete: "CASCADE",
  foreignKey: "createdBy",
});


Character.belongsTo(User);

module.exports = {
  User,
  Character
};