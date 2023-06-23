const express = require("express");
const { UserController } = require("../controllers/userController");
const { authentication } = require("../middlewares/authentication");
const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.use(authentication);
router.patch("/change-password", UserController.changePassword);
router.patch("/change-profile", UserController.changeProfile)

module.exports = router;
