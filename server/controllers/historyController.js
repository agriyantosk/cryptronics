const { History } = require("../models");

class HistoryController {
    static async fetch(req, res, next) {
        try {
            const fetchHistories = await History.findAll({
                where: {
                    UserId: req.user.id,
                },
            });
            res.status(200).json(fetchHistories);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = { HistoryController };
