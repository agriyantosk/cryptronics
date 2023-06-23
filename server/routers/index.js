const express = require("express");
const { authentication } = require("../middlewares/authentication");
const { errorHandler } = require("../middlewares/errorHandler");
const router = express.Router();
const userRouter = require("./user");
const plannerRouter = require("./planner");

router.use("/user", userRouter);
router.use(authentication);
router.use("/planner", plannerRouter);
router.use(errorHandler);

module.exports = router;
