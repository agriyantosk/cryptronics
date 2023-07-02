const express = require("express");
const { HistoryController } = require("../controllers/historyController");
const router = express.Router();

router.get("/", HistoryController.fetch)

module.exports = router