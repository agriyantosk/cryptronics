const express = require("express");
const { JournalController } = require("../controllers/journalController");
const router = express.Router();

router.get("/fetch", JournalController.fetch)
router.post("/add", JournalController.add)
router.delete("/delete", JournalController.delete)

module.exports = router