const express = require("express");
const { authentication } = require("../middlewares/authentication");
const { errorHandler } = require("../middlewares/errorHandler");
const router = express.Router();
const userRouter = require("./user");
const plannerRouter = require("./planner");
const journalRouter = require("./journal")

router.use("/user", userRouter);
router.use(authentication);
router.use("/planner", plannerRouter);
router.use("/journal", journalRouter)
router.use(errorHandler);

module.exports = router;
