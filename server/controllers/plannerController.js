const { Planner, Journal } = require("../models");

class PlannerController {
    static async add(req, res, next) {
        try {
            const { cryptoName, entryPrice, exitPrice, ratio } = req.body;
            const addPlan = await Planner.create({
                cryptoName,
                entryPrice,
                exitPrice,
                ratio,
                status: "Planned",
            });
            res.status(201).json({ message: "Plan added successfully" });
        } catch (error) {
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
                    ratio,
                    status: "Planned",
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
                const addJournal = await Journal.create({
                    // nanti aja bikin journal nya dulu aja si
                })
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = { PlannerController };
