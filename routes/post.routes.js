const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

<<<<<<< HEAD
// router
router.get("/", ctrls.posts.index);
router.post("/", ctrls.posts.create);
router.delete("/:id", ctrls.posts.destroy);
router.put("/:id", ctrls.posts.update);
=======
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
// router.get("/", (req, res) => {});
router.get("/post", ctrls.posts.index);
router.post("/post", ctrls.posts.create);
router.delete("/post/:id", ctrls.posts.destroy);
router.get("/post/:id/edit", authRequired, ctrls.posts.edit);
router.put("/post/:id", ctrls.posts.update);
>>>>>>> 10f36d2b770740b2c609775aeab9dd31e3eeac55

module.exports = router;
