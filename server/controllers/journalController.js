const { Journal, Planner } = require("../models");

class JournalController {
    static async fetch(req, res, next) {
        try {
            const fetchJournal = await Journal.findAll({
                where: { UserId: req.user.id },
                order: [["id", "ASC"]],
            });
            res.status(200).json(fetchJournal);
        } catch (error) {
            next(error);
        }
    }

    static async add(req, res, next) {
        try {
            let result;
            const { cryptoName, entryPrice, exitPrice, tradeWeight, ratio } =
                req.body.data;
            const { plannerId } = req.body;
            const profitOrLoss =
                exitPrice * tradeWeight - entryPrice * tradeWeight;
            if (profitOrLoss > 0) {
                result = "PROFIT";
            } else {
                result = "LOSS";
            }
            const percentage = (exitPrice - entryPrice) / entryPrice;
            const addJournal = await Journal.create({
                cryptoName,
                entryPrice,
                exitPrice,
                tradeWeight,
                ratio,
                profitOrLoss,
                percentage,
                result,
                UserId: req.user.id,
            });
            const checkPlanner = await Planner.findByPk(plannerId);
            if (checkPlanner) {
                await Planner.update(
                    {
                        cryptoName,
                        entryPrice,
                        exitPrice,
                        tradeWeight,
                        ratio,
                        status: "Executed",
                        UserId: req.user.id,
                    },
                    { where: { id: plannerId } }
                );
            }
            res.status(201).json({ message: "Journal added successfully" });
        } catch (error) {
            console.log(error);
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
