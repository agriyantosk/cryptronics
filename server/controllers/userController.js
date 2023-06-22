const { User } = require("../models");

class UserController {
    static async register(req, res, next) {
        console.log(req.body);
        const { firstName, lastName, email, password, age, address, initialBalance } =
            req.body;
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
    }
}

module.exports = { UserController };
