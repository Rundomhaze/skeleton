'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Cards', [{
      cardName: 'Card 1',
      cardDesc: 'Description 1',
      cardPrice: 10,
      idUser: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cardName: 'Card 2',
      cardDesc: 'Description 2',
      cardPrice: 20,
      idUser: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cardName: 'Card 3',
      cardDesc: 'Description 3',
      cardPrice: 30,
      idUser: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cardName: 'Card 4',
      cardDesc: 'Description 4',
      cardPrice: 40,
      idUser: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cardName: 'Card 5',
      cardDesc: 'Description 5',
      cardPrice: 50,
      idUser: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cardName: 'Card 6',
      cardDesc: 'Description 6',
      cardPrice: 60,
      idUser: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cards', null, {});
  }
};
