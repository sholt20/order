'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Servers', [
     {
       name: 'Test server 1',
       owner_id: 1,
       dm: false,
       invite_link: '/1',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: 'Test server 2',
       owner_id: 2,
       dm: false,
       invite_link: '/2',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: 'Test server 3',
       owner_id: 3,
       dm: false,
       invite_link: '/3',
       createdAt: new Date(),
       updatedAt: new Date(),
     }
   ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Servers');
  }
};
