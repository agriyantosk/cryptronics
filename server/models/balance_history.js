"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Balance_History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Balance_History.init(
        {
            transaction: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Transactions is required",
                    },
                    notEmpty: {
                        message: "Transactions is required",
                    },
                },
            },
            amount: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Amount is required",
                    },
                    notEmpty: {
                        message: "Amount is required",
                    },
                },
            },
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Balance_History",
        }
    );
    return Balance_History;
};
