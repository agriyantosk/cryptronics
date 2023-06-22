'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Journals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cryptoName: {
        type: Sequelize.STRING
      },
      entryPrice: {
        type: Sequelize.DECIMAL
      },
      exitPrice: {
        type: Sequelize.DECIMAL
      },
      ratio: {
        type: Sequelize.DECIMAL
      },
      percentage: {
        type: Sequelize.DECIMAL
      },
      profitOrLoss: {
        type: Sequelize.DECIMAL
      },
      result: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Journals');
  }
};