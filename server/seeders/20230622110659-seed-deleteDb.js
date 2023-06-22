"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("User", null, {
            truncate: true,
            restartIdentity: true,
            cascade: true,
        });
        await queryInterface.bulkDelete("Journal", null, {
            truncate: true,
            restartIdentity: true,
            cascade: true,
        });
        await queryInterface.bulkDelete("Planner", null, {
            truncate: true,
            restartIdentity: true,
            cascade: true,
        });
        await queryInterface.bulkDelete("Coin_Watchlist", null, {
            truncate: true,
            restartIdentity: true,
            cascade: true,
        });
        await queryInterface.bulkDelete("Launch_Watchlist", null, {
            truncate: true,
            restartIdentity: true,
            cascade: true,
        });
    },
};
