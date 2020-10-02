'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Posts', [
    {
      message: "Welcome to order!",
      author_id: 2,
      channel_id: 1,
      author_name: 'Yusuke',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      message: "Discord is lame!",
      author_id: 1,
      channel_id: 1,
      author_name: 'Demo-lition',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      message: "This place is empty...",
      author_id: 2,
      channel_id: 2,
      author_name: 'Yusuke',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
