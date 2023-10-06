const router = require("express").Router();
const controller = require("../controller/group.controller");

router.post("/", controller.createGroup);
router.post("/participants", controller.joinGroup);
router.post("/info", controller.groupInfoFind);

module.exports = router;

