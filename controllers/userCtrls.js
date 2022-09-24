const db = require("../models");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  req.body.password = bcrypt.hashSync(req.body.password, salt);
  db.User.findOne({ id: req.body.id }, (err, userExists) => {
    if (userExists) {
      return;
    } else {
      db.User.create(req.body, (err, createUser) => {
        req.session.currentUser = createUser;
      });
    }
  });
};

const signin = (req, res) => {
  db.User.findOne({ id: req.body.id }, (err, foundUser) => {
    if (foundUser) {
      const validLogin = bcrypt.compareSync(
        req.body.password,
        foundUser.password
      );
      if (validLogin) {
        req.session.currentUser = foundUser;
      } else {
        res.redirect("/");
      }
    } else {
      res.redirect("/");
    }
  });
};

module.exports = {
  register,
  signin,
};
