'use strict';
module.exports = (sequelize, DataTypes) => {
  const Server_users = sequelize.define('Server_users', {
    user_id: DataTypes.INTEGER,
    server_id: DataTypes.INTEGER
  }, {});
  Server_users.associate = function(models) {
    // Server_users.hasMany(models.User, { foreignKey: 'user_id'})
    // Server_users.hasMany(models.Server, { foreignKey: 'server_id'})
  };
  return Server_users;
};