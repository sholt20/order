'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Channels', [
      {
        name: 'Howdy',
        server_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Welcome',
        server_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anti-discord chat',
        server_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Empty channel',
        server_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Behind you',
        server_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'General',
        server_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cool zone',
        server_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Channels', null, {});
  }
};
