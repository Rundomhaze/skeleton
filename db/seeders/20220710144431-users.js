'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const hashPass = await bcrypt.hash("123", 5);
    await queryInterface.bulkInsert('Users', [{
      userName: 'Admin',
      userEmail: 'admin@admin',
      userPassword: hashPass,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userName: 'User',
      userEmail: 'user@user',
      userPassword: hashPass,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
