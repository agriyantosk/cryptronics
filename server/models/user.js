"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Journal);
            User.hasMany(models.Coin_Watchlist);
            User.hasMany(models.Launch_Watchlist);
            User.hasMany(models.Planner);
        }
    }
    User.init(
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "First name is required",
                    },
                    notEmpty: {
                        messge: "First name is required",
                    },
                },
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Last name is required",
                    },
                    notEmpty: {
                        messge: "Last name is required",
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Email is required",
                    },
                    notEmpty: {
                        messge: "Email is required",
                    },
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Password is required",
                    },
                    notEmpty: {
                        messge: "Password is required",
                    },
                },
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Address is required",
                    },
                    notEmpty: {
                        messge: "Address is required",
                    },
                },
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Age is required",
                    },
                    notEmpty: {
                        messge: "Age is required",
                    },
                },
            },
            initialBalance: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        message: "Initial Balance is required",
                    },
                    notEmpty: {
                        messge: "Initial Balance is required",
                    },
                },
            },
            isPaid: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    User.beforeCreate((user, options) => {
      const hashedPassword = hashPassword(user.password)
      user.password = hashedPassword
    })
    return User;
};
