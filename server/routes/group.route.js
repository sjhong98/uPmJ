const router = require("express").Router();
const controller = require("../controller/group.controller");

// router.get("/creategroup", controller.createGroup);
// router.get("/joingroup", controller.joinGroup);
router.get("/groupcode", controller.groupCode);

module.exports = router;