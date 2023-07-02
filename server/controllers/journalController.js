const { History, Journal, Planner, Dashboard, User } = require("../models");
const Sequelize = require("sequelize");

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
            await User.update(
                {
                    initialBalance: Sequelize.literal(
                        `"initialBalance" + ${profitOrLoss}`
                    ),
                },
                {
                    where: {
                        id: req.user.id,
                    },
                }
            );
            let profit;
            let loss;
            if (result === "PROFIT") {
                profit = profitOrLoss;
                loss = 0;
            } else if (result === "LOSS") {
                profit = 0;
                loss = profitOrLoss;
            }
            const userProfitFreq = await Journal.findAll({
                where: {
                    UserId: req.user.id,
                    result: "PROFIT",
                },
            });
            const userLossFreq = await Journal.findAll({
                where: {
                    UserId: req.user.id,
                    result: "LOSS",
                },
            });
            const profitFreq = userProfitFreq.length;
            const lossFreq = userLossFreq.length;
            const updateDashboard = await Dashboard.update(
                {
                    activity: Sequelize.literal("activity + 1"),
                    profit: Sequelize.literal(`"profit" + ${profit}`),
                    loss: Sequelize.literal(`"loss" + ${loss}`),
                    profitFreq,
                    lossFreq,
                },
                {
                    where: {
                        UserId: req.user.id,
                    },
                }
            );
            const addHistory = await History.create({
                cryptoName,
                amount: (entryPrice * tradeWeight),
                tradeWeight,
                UserId: req.user.id,
            });
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
