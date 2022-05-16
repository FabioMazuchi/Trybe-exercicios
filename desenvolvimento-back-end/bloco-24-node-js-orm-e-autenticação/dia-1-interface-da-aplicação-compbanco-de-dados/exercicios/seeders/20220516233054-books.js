'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
  [
    {
      title: 'A Casa Abandonada',
      author: 'Hobbin Hood',
      pageQuantity: 233,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {})
};
