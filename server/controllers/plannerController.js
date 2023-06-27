const { Planner } = require("../models");

class PlannerController {
    static async fetch(req, res, next) {
        try {
            const fetchPlanner = await Planner.findAll({
                where: { UserId: req.user.id },
                order: [["id", "ASC"]],
            });
            res.status(200).json(fetchPlanner);
        } catch (error) {
            next(error);
        }
    }

    static async add(req, res, next) {
        try {
            console.log(req.body, ">>>>")
            const { cryptoName, entryPrice, exitPrice, tradeWeight, ratio } =
                req.body;
            const addPlan = await Planner.create({
                cryptoName,
                entryPrice,
                exitPrice,
                tradeWeight,
                ratio,
                status: "Planned",
                UserId: req.user.id,
            });
            res.status(201).json({ message: "Plan added successfully" });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async edit(req, res, next) {
        try {
            const { cryptoName, entryPrice, exitPrice, ratio, id } = req.body;
            const addPlan = await Planner.update(
                {
                    cryptoName,
                    entryPrice,
                    exitPrice,
                    tradeWeight,
                    ratio,
                    status: "Planned",
                    UserId: req.user.id,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            res.status(201).json({ message: "Plan edited successfully" });
        } catch (error) {}
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.body;
            const deletePlan = await Planner.destroy({
                where: {
                    id,
                },
            });
            res.status(200).json({ message: "Plan deleted successfully" });
        } catch (error) {
            next(error);
        }
    }

    static async execute(req, res, next) {
        try {
            const { id } = req.body;
            const findPlan = await Planner.findByPk(id);
            if (!findPlan) {
                throw { name: "Data not found" };
            } else {
                const executePlan = await Planner.update(
                    {
                        status: "Executed",
                    },
                    {
                        where: {
                            id,
                        },
                    }
                );
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = { PlannerController };
