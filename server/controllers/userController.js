const { checkPassword, hashPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
    static async register(req, res, next) {
        try {
            const {
                firstName,
                lastName,
                email,
                password,
                age,
                address,
                initialBalance,
            } = req.body;
            const register = await User.create({
                firstName,
                lastName,
                email,
                password,
                address,
                age,
                initialBalance,
                isPaid: false,
            });
            res.status(201).json({ message: "Successfully Register!" });
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const checkEmail = await User.findOne({
                where: {
                    email,
                },
            });
            if (!checkEmail) {
                throw { name: "Invalid email/password" };
            } else {
                const access = checkPassword(checkEmail.password, password);
                if (!access) {
                    throw { name: "Invalid email/password" };
                } else {
                    const access_token = signToken({ id: checkEmail.id });
                    res.status(200).json({ access_token });
                }
            }
        } catch (error) {
            next(error);
        }
    }

    static async changePassword(req, res, next) {
        try {
            let { currentPassword, newPassword } = req.body;
            if (currentPassword === newPassword) {
                throw { name: "Invalid password input" };
            } else {
                const user = await User.findOne({
                    where: {
                        id: req.user.id,
                    },
                });
                const passValidation = checkPassword(
                    user.password,
                    currentPassword
                );
                if (!passValidation) {
                    throw { name: "Invalid email/password" };
                } else {
                    newPassword = hashPassword(newPassword);
                    const updatePassword = await User.update(
                        {
                            password: newPassword,
                        },
                        {
                            where: {
                                id: req.user.id,
                            },
                        }
                    );
                    res.status(201).json({
                        message: "Password changed successfully",
                    });
                }
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = { UserController };
