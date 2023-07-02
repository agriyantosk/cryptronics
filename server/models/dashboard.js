"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Dashboard extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Dashboard.init(
        {
            activity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Activity is required",
                    },
                    notEmpty: {
                        message: "Activity is required",
                    },
                },
            },
            profit: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Trading Activity is required",
                    },
                    notEmpty: {
                        message: "Trading Activity is required",
                    },
                },
            },
            loss: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Loss is required",
                    },
                    notEmpty: {
                        message: "Loss is required",
                    },
                },
            },
            profitFreq: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Profit Frequency is required",
                    },
                    notEmpty: {
                        message: "Profit Frequency is required",
                    },
                },
            },
            lossFreq: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Loss Frequency is required",
                    },
                    notEmpty: {
                        message: "Loss Frequency is required",
                    },
                },
            },
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Dashboard",
        }
    );
    return Dashboard;
};
