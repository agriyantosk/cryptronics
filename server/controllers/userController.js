const { checkPassword } = require("../helpers/bcrypt");
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
                throw { name: "Invalid Email" };
            } else {
                const access = checkPassword(checkEmail.password, password);
                if (!access) {
                    throw { name: "Invalid Password" };
                } else {
                    const access_token = signToken({ id: checkEmail.id });
                    res.status(200).json({ access_token });
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = { UserController };
