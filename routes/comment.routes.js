const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

// router
router.get("/", ctrls.comments.index);
router.post("/", ctrls.comments.create);
router.delete("/:id", ctrls.comments.destroy);
router.put("/:id", ctrls.comments.update);

module.exports = router;
