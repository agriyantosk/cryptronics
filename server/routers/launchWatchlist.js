const express = require("express");
const {
    LaunchWatchlistController,
} = require("../controllers/launchWatchlistController");
const router = express.Router();

router.get("/fetch", LaunchWatchlistController.fetch);
router.post("/add", LaunchWatchlistController.add);
router.delete("/delete", LaunchWatchlistController.delete);

module.exports = router;
