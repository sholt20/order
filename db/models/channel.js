'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    name: DataTypes.STRING,
    server_id: DataTypes.INTEGER
  }, {});
  Channel.associate = function(models) {
    Channel.hasMany(models.Post, { foreignKey: 'channel_id' })
    Channel.belongsTo(models.Server, { foreignKey: 'server_id' })
  };
  return Channel;
};