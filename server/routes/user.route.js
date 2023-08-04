const router = require("express").Router();
const controller = require("../controller/user.controller");

router.post("/usercheck", controller.userCheck);
router.get("/userregister", controller.userRegister);

module.exports = router;