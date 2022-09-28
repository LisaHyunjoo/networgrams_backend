const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

const authRequired = (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect(``);
  }
};

const authRequiredCreate = (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect(``);
  }
};

// router
router.get("/", (req, res) => {
  res.json();
});
router.get("/post", ctrls.posts.index);
router.post("/post", ctrls.posts.create);
router.delete("/post/:id", ctrls.posts.destroy);
router.get("/post/:id/edit", authRequired, ctrls.posts.edit);
router.put("/post/:id", ctrls.posts.update);

module.exports = router;
