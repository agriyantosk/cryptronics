"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Launch_Watchlist extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Launch_Watchlist.belongsTo(models.User, {
                foreignKey: "UserId",
            });
        }
    }
    Launch_Watchlist.init(
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
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Launch_Watchlist",
        }
    );
    return Launch_Watchlist;
};
