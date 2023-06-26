const { Journal } = require("../models");

class JournalController {
    static async fetch(req, res, next) {
        try {
            const fetchJournal = await Journal.findAll({
                where: { UserId: req.user.id },
                order: [['id', 'ASC']]
            });
            res.status(200).json(fetchJournal)
        } catch (error) {
            next(error)
        }
    }

    static async add(req, res, next) {
        try {
            const {
                cryptoName,
                entryPrice,
                exitPrice,
                ratio,
                profitOrLoss,
                result,
            } = req.body;
            const addJournal = await Journal.create({
                cryptoName,
                entryPrice,
                exitPrice,
                ratio,
                profitOrLoss,
                result,
                UserId: req.user.id
            });
            res.status(201).json({ message: "Journal added successfully" });
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body;
            const deleteJournal = await Journal.destroy({ where: { id } });
            res.status(200).json({ message: "Jorunal deleted successfully" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = { JournalController };
