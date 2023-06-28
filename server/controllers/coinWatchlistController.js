const { Coin_Watchlist } = require("../models");

class CoinWatchlistController {
    static async fetch(req, res, next) {
        try {
            const fetchWatchlist = await Coin_Watchlist.findAll({
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
            const { cryptoName, symbol, iconUrl, coinrankingUrl } = req.body;
            const checkCoinWatchlist = await Coin_Watchlist.findOne({
                where: {
                    cryptoName,
                },
            });
            if (checkCoinWatchlist) {
                throw { name: "You already added to the watchlist" };
            } else {
                const addCoinWatchlist = await Coin_Watchlist.create({
                    cryptoName,
                    symbol,
                    iconUrl,
                    coinrankingUrl,
                    UserId: req.user.id,
                });
                res.status(201).json({
                    message: "Successfully added to your watchlist",
                });
            }
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params;
            const findWatchlist = await Coin_Watchlist.findOne({
                where: {
                    id,
                },
            });
            if (!findWatchlist) {
                throw { name: "Data not found" };
            } else {
                const deleteCoinWatchlist = await Coin_Watchlist.destroy({
                    where: {
                        id,
                    },
                });
                res.status(200).json({
                    message: `Successfully deleted ${findWatchlist.name} from your watchlist`,
                });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = { CoinWatchlistController };
