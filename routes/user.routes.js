const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

router.get("/register", (req, res) => {
  res.json();
});
router.post("/register", ctrls.users.register);
router.get("/signin", (req, res) => {
  res.json();
});
router.post("/signin", ctrls.users.signin);
router.get("/signout", ctrls.users.signout);

module.exports = router;
