"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Planner extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Planner.belongsTo(models.User, {
                foreignKey: "UserId",
            });
        }
    }
    Planner.init(
        {
            cryptoName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Crypto name is required",
                    },
                    notEmpty: {
                        messge: "Crypto name is required",
                    },
                },
            },
            entryPrice: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Entry price is required",
                    },
                    notEmpty: {
                        messge: "Entry price is required",
                    },
                },
            },
            exitPrice: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Exit price is required",
                    },
                    notEmpty: {
                        messge: "Exit price is required",
                    },
                },
            },
            tradeWeight: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Exit price is required",
                    },
                    notEmpty: {
                        messge: "Exit price is required",
                    },
                },
            },
            ratio: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Ratio is required",
                    },
                    notEmpty: {
                        messge: "Ratio is required",
                    },
                },
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Status is required",
                    },
                    notEmpty: {
                        messge: "Status is required",
                    },
                },
            },
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Planner",
        }
    );
    return Planner;
};
