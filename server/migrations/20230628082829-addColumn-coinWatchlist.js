"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.addColumn("Coin_Watchlists", "symbol", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("Coin_Watchlists", "iconUrl", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("Coin_Watchlists", "coinrankingUrl", {
            type: Sequelize.STRING,
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.addColumn("Coin_Watchlists", "symbol");
        await queryInterface.addColumn("Coin_Watchlists", "iconUrl");
        await queryInterface.addColumn("Coin_Watchlists", "coinrankingUrl");
    },
};
