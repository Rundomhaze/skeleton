'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Photos', [{
      idCard: 1,
      img_href: '/images/cardsImg/1/card-1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 1,
      img_href: '/images/cardsImg/1/card-2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 2,
      img_href: '/images/cardsImg/2/card-1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 2,
      img_href: '/images/cardsImg/2/card-2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 3,
      img_href: '/images/cardsImg/3/card-1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 3,
      img_href: '/images/cardsImg/3/card-2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 4,
      img_href: '/images/cardsImg/4/card-1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 4,
      img_href: '/images/cardsImg/4/card-2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 5,
      img_href: '/images/cardsImg/5/card-1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 5,
      img_href: '/images/cardsImg/5/card-2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 6,
      img_href: '/images/cardsImg/6/card-1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      idCard: 6,
      img_href: '/images/cardsImg/6/card-2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
