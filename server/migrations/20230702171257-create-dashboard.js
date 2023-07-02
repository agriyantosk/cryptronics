"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Dashboards", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            activity: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            profit: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            },
            loss: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            },
            roi: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            },
            win: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            },
            loss: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            },
            UserId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: "Users",
                    },
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Dashboards");
    },
};
