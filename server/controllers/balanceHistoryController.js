const { Balance_History, User } = require("../models");
const Sequelize = require("sequelize");

class BalanceHistoryController {
    static async fetch(req, res, next) {
        const fetchBalanceHistory = await Balance_History.findAll({
            where: { UserId: req.user.id },
        });
        res.status(200).json(fetchBalanceHistory);
    }
    static async add(req, res, next) {
        const { transaction, amount } = req.body;
        console.log(req.body);
        await Balance_History.create({
            transaction,
            amount,
            UserId: req.user.id,
        });
        await User.update(
            {
                initialBalance: Sequelize.literal(
                    `"initialBalance" + ${amount}`
                ),
            },
            {
                where: {
                    id: req.user.id,
                },
            }
        );
        res.status(201).json({ message: "Successfully Added Balance History" });
    }
}

module.exports = { BalanceHistoryController };
