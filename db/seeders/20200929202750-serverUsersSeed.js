'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Server_users', [
      {
        user_id: 2,
        server_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        server_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
   },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Server_users', null, {});
  }
};
