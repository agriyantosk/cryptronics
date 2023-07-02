const express = require("express");
const {
    BalanceHistoryController,
} = require("../controllers/balanceHistoryController");
const router = express.Router();

router.get("/", BalanceHistoryController.fetch)
router.post("/add", BalanceHistoryController.add);

module.exports = router;
