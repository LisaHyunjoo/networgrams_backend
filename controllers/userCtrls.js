const db = require("../models");
const bcrypt = require("bcrypt");

const register = (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  req.body.password = bcrypt.hashSync(req.body.password, salt);
  db.Users.findOne({ id: req.body.id }, (err, userExists) => {
    if (userExists) {
      res.status(200).json({
        user: req.session.currentUser,
        message: "user id already exist",
      });
    } else {
      db.Users.create(req.body, (err, createUser) => {
        res.status(200).json({
          createUser,
        });
      });
    }
  });
};

const signin = (req, res) => {
  db.Users.findOne({ id: req.body.id }, (err, foundUser) => {
    if (foundUser) {
      const validLogin = bcrypt.compareSync(
        req.body.password,
        foundUser.password
      );
      if (validLogin) {
        res.status(200).json({
          foundUser,
        });
      } else {
        res.status(200).json({
          message: "ID or Password do not match",
        });
      }
    } else {
      res.status(404).json({
        error: "ID or Password do not match",
      });
    }
  });
};

const signout = (req, res) => {
  req.session.destroy(() => {
    req.status(200).json({
      logout: "logged out",
    });
  });
};

module.exports = {
  register,
  signin,
  signout,
};