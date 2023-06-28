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
        await queryInterface.addColumn("Launch_Watchlists", "title", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("Launch_Watchlists", "symbol", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("Launch_Watchlists", "rank", {
            type: Sequelize.INTEGER,
        });
        await queryInterface.addColumn("Launch_Watchlists", "eventDate", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("Launch_Watchlists", "createdDate", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("Launch_Watchlists", "proof", {
            type: Sequelize.STRING,
        });
        await queryInterface.addColumn("Launch_Watchlists", "source", {
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
        await queryInterface.removeColumn("Launch_Watchlists", "title", {});
        await queryInterface.removeColumn("Launch_Watchlists", "symbol", {});
        await queryInterface.removeColumn("Launch_Watchlists", "rank", {});
        await queryInterface.removeColumn("Launch_Watchlists", "eventDate", {});
        await queryInterface.removeColumn("Launch_Watchlists", "createdDate", {});
        await queryInterface.removeColumn("Launch_Watchlists", "proof", {});
        await queryInterface.removeColumn("Launch_Watchlists", "source", {});
    },
};
