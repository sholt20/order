'use strict';
module.exports = (sequelize, DataTypes) => {
  const Server_users = sequelize.define('Server_users', {
    user_id: DataTypes.INTEGER,
    server_id: DataTypes.INTEGER
  }, {});
  Server_users.associate = function(models) {
    // associations can be defined here
  };
  return Server_users;
};