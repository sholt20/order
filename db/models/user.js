'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashed_password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Server, { foreignKey: 'owner_id' })
    User.hasMany(models.Post, { foreignKey: 'author_id' })
    User.belongsToMany(models.Server, {through: 'Server_users', foreignKey: 'server_id' })
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, User.dataValues.hashed_password.toString());
  };

  return User;
};