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
        await queryInterface.bulkDelete("Users", null, {
            truncate: true,
            restartIdentity: true,
            cascade: true,
        });
        await queryInterface.bulkDelete("Journals", null, {
            truncate: true,
            restartIdentity: true,
            cascade: true,
        });
        await queryInterface.bulkDelete("Planners", null, {
            truncate: true,
            restartIdentity: true,
            cascade: true,
        });
        await queryInterface.bulkDelete("Coin_Watchlists", null, {
            truncate: true,
            restartIdentity: true,
            cascade: true,
        });
        await queryInterface.bulkDelete("Launch_Watchlists", null, {
            truncate: true,
            restartIdentity: true,
            cascade: true,
        });
    },
};
