'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Servers', [
     {
       name: 'Cool zone',
       owner_id: 1,
       dm: false,
       invite_link: '/1',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: 'Not Secret Discord',
       owner_id: 2,
       dm: false,
       invite_link: '/2',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: 'Shhhhh',
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
