const router = require("express").Router();
const controller = require("../controller/user.controller");

router.post("/signin", controller.signIn);

module.exports = router;