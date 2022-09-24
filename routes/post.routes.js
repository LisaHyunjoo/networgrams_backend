const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

// router
router.get("/", (req, res) => {});
router.get("/post", ctrls.posts.index);
router.post("/post", ctrls.posts.create);
router.delete("/post/:id", ctrls.posts.destroy);
router.put("/post/:id", ctrls.posts.update);

module.exports = router;
