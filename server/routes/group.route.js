const router = require("express").Router();
const controller = require("../controller/group.controller");

router.post("/creategroup", controller.createGroup);
router.post("/joingroup", controller.joinGroup);
router.post("/requestgroup", controller.groupInfoFind);

module.exports = router;

