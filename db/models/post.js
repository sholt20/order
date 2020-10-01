'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    message: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
    channel_id: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, { foreignKey: 'author_id' })
    Post.belongsTo(models.User, { foreignKey: 'author_name' })
    Post.belongsTo(models.Channel, { foreignKey: 'channel_id' })
  };
  return Post;
};