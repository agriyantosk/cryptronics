const express = require("express");
const { PlannerController } = require("../controllers/plannerController");
const router = express.Router();

router.get("/fetch", PlannerController.fetch);
router.post("/add", PlannerController.add);
router.put("/edit", PlannerController.edit);
router.delete("/delete", PlannerController.delete);
router.patch("/execute", PlannerController.execute);
router.get("/fetch/:id", PlannerController.fetchById);

module.exports = router;
