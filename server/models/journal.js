"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Journal extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Journal.belongsTo(models.User, {
                foreignKey: "UserId",
            });
        }
    }
    Journal.init(
        {
            cryptoName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Crypto Name is required",
                    },
                    notEmpty: {
                        message: "Crypto Name is required",
                    },
                },
            },
            entryPrice: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Entry Price is required",
                    },
                    notEmpty: {
                        message: "Entry Price is required",
                    },
                },
            },
            exitPrice: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Exit Price is required",
                    },
                    notEmpty: {
                        message: "Exit Price is required",
                    },
                },
            },
            tradeWeight: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Trade Weight is required",
                    },
                    notEmpty: {
                        message: "Trade Weight is required",
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
                        message: "Ratio is required",
                    },
                },
            },
            percentage: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Percentage is required",
                    },
                    notEmpty: {
                        message: "Percentage is required",
                    },
                },
            },
            profitOrLoss: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Profit or Loss result is required",
                    },
                    notEmpty: {
                        message: "Profit or Loss result is required",
                    },
                },
            },
            result: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Result is required",
                    },
                    notEmpty: {
                        message: "Result is required",
                    },
                },
            },
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Journal",
        }
    );
    return Journal;
};
