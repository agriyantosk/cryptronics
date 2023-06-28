const { Launch_Watchlist } = require("../models");
const axios = require("axios");

class LaunchWatchlistController {
    static async fetchLaunches(req, res, next) {
        try {
            const response = await axios({
                method: "GET",
                url: "https://developers.coinmarketcal.com/v1/events",
                headers: {
                    "x-api-key": "1wHlOSrTBB3MD9TpM6kgd30mSylwPe3Nan7TzW6h",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": `*`,
                },
            });
            res.status(200).json(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    static async fetch(req, res, next) {
        try {
            const fetchWatchlist = await Launch_Watchlist.findAll({
                where: {
                    UserId: req.user.id,
                },
                order: [["id", "ASC"]],
            });
            res.status(200).json(fetchWatchlist);
        } catch (error) {
            next(error);
        }
    }

    static async add(req, res, next) {
        try {
            const {
                cryptoName,
                title,
                rank,
                symbol,
                eventDate,
                createdDate,
                proof,
                source,
            } = req.body;
            console.log(req.body);
            const addLaunchWatchlist = await Launch_Watchlist.create({
                cryptoName,
                title,
                rank,
                symbol,
                eventDate,
                createdDate,
                proof,
                source,
                UserId: req.user.id,
            });
            res.status(201).json({
                message: "Successfully added to your watchlist",
            });
        } catch (error) {
            console.log(error)
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params;
            const findWatchlist = await Launch_Watchlist.findOne({
                where: {
                    id,
                },
            });
            if (!findWatchlist) {
                throw { name: "Data not found" };
            } else {
                const deleteLaunchWatchlist = await Launch_Watchlist.destroy({
                    where: {
                        id,
                    },
                });
                res.status(200).json({
                    message: `Successfully deleted ${findWatchlist.cryptoName} from your watchlist`,
                });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = { LaunchWatchlistController };
