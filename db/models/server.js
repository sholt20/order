'use strict';
module.exports = (sequelize, DataTypes) => {
  const Server = sequelize.define('Server', {
    name: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
    dm: DataTypes.BOOLEAN,
    invite_link: DataTypes.STRING
  }, {});
  Server.associate = function(models) {
    Server.belongsTo(models.User, { foreignKey: 'owner_id' })
    Server.hasMany(models.Channel, { foreignKey: 'server_id' })
    Server.belongsToMany(models.User, { through: 'Server_users', foreignKey: 'user_id' })
  };
  return Server;
};