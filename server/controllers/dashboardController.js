const { User, Dashboard } = require("../models");

class DashboardController {
    static async fetch(req, res, next) {
        try {
            const fetchBalance = await User.findByPk(req.user.id);
            const fetchDashboard = await Dashboard.findOne({
                where: {
                    UserId: req.user.id,
                },
            });
            res.status(200).json({
                balance: fetchBalance.initialBalance,
                fetchDashboard,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = DashboardController;
