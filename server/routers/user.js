const express = require("express");
const { UserController } = require("../controllers/userController");
const { authentication } = require("../middlewares/authentication");
const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.use(authentication);
router.patch("/change-password", UserController.changePassword);
router.patch("/change-profile", UserController.changeProfile)
/* mungkin nanti ada tambahan journal update initial balance mereka,
masih bingung antara bikin tabel baru atau yang ada disini aja,

tapi kalo dari proses nambah kurang initial balance yang sekarang kepikiran masih
enaknya mending dari sini aja jadi source initial balance cuman ada satu yaitu dari
si user, tapi mungkin enaknya nanti disambung sama tabel journal jadi ketrack semua
kegiatan trading si user */

module.exports = router;
