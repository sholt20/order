'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Channels', [
      {
        name: 'Test Channel 1',
        server_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test Channel 2',
        server_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test Channel 3',
        server_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test Channel 4',
        server_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test channel 5',
        server_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Channels', null, {});
  }
};
