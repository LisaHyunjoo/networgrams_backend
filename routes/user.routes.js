const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

router.post("/register", ctrls.users.register);
router.get("/signin", ctrls.users.signin);
router.post("/signin", ctrls.users.signin);
router.get("/signout", ctrls.users.signout);

module.exports = router;
