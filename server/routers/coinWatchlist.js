const express = require("express");
const {
    CoinWatchlistController,
} = require("../controllers/coinWatchlistController");
const router = express.Router();

router.get("/fetch", CoinWatchlistController.fetch);
router.post("/add", CoinWatchlistController.add);
router.delete("/delete/:id", CoinWatchlistController.delete);

module.exports = router;
