const router = require("express").Router();
const controller = require("../controller/user.controller");

router.post("/usercheck", controller.userCheck);
router.get("/signup", controller.signUp);

module.exports = router;