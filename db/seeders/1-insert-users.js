'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ username: 'Demo-lition', email: 'demo@example.com', hashed_password: createPassword() }),
      r({ username: 'Yusuke', email: 'yusuke@example.com', hashed_password: createPassword() }),
      r({ username: 'Peta', email: 'petra@example.com', hashed_password: createPassword() }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
