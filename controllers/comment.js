const db = require("../models");

const insert = (req, res) => {
  // db.Posts.insertMany({
  //   _id: 1,
  //   comment: [
  //     {
  //       name: "Daniel",
  //       comContent: "good job",
  //     },
  //   ],
  // });
};

const update = (req, res) => {
  db.Posts.updateMany(
    {},
    {
      $set: req.body,
    },
    {
      new: true,
    },
    (err, updatedPost) => {
      if (err) return res.status(404).json({ error: err.message });
      return res.status(200).json(updatedPost);
    }
  );
};

module.exports = {
  insert,
  update,
};
