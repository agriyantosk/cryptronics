const express = require("express");
const { PlannerController } = require("../controllers/plannerController");
const router = express.Router();

router.post("/add", PlannerController.add);
router.put("/edit", PlannerController.edit);
router.delete("/delete", PlannerController.delete);
router.patch("/execute", PlannerController.execute)

module.exports = router;
