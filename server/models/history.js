"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    History.init(
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
            amount: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Trade Amount is required",
                    },
                    notEmpty: {
                        message: "Trade Amount is required",
                    },
                },
            },
            tradeWeight: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Trade Unit is required",
                    },
                    notEmpty: {
                        message: "Trade Unit is required",
                    },
                },
            },
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "History",
        }
    );
    return History;
};
