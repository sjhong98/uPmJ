const router = require("express").Router();
const controller = require("../controller/group.controller");

router.post("/creategroup", controller.createGroup);
router.get("/joingroup", controller.joinGroup);

module.exports = router;

