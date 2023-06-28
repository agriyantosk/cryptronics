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
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Title is required",
                    },
                    notEmpty: {
                        messge: "Title is required",
                    },
                },
            },
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
            symbol: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Symbol is required",
                    },
                    notEmpty: {
                        messge: "Symbol is required",
                    },
                },
            },
            rank: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Rank is required",
                    },
                    notEmpty: {
                        messge: "Rank is required",
                    },
                },
            },
            eventDate: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Event Date is required",
                    },
                    notEmpty: {
                        messge: "Event Date is required",
                    },
                },
            },
            createdDate: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Created Date is required",
                    },
                    notEmpty: {
                        messge: "Created Date is required",
                    },
                },
            },
            proof: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Proof is required",
                    },
                    notEmpty: {
                        messge: "Proof is required",
                    },
                },
            },
            source: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Source is required",
                    },
                    notEmpty: {
                        messge: "Source is required",
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
