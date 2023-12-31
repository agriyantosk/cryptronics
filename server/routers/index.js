const express = require("express");
const { authentication } = require("../middlewares/authentication");
const { errorHandler } = require("../middlewares/errorHandler");
const router = express.Router();
const userRouter = require("./user");
const plannerRouter = require("./planner");
const journalRouter = require("./journal");
const launchRouter = require("./launchWatchlist");
const coinRouter = require("./coinWatchlist");
const dashboardRouter = require("./dashboard");
const historyRouter = require("./history");
const balanceHistoryRouter = require("./balanceHistory");

router.use("/user", userRouter);
router.use(authentication);
router.use("/planner", plannerRouter);
router.use("/journal", journalRouter);
router.use("/launch", launchRouter);
router.use("/coin", coinRouter);
router.use("/dashboard", dashboardRouter);
router.use("/history", historyRouter);
router.use("/balance", balanceHistoryRouter);
router.use(errorHandler);

module.exports = router;
