const db = require("../models");

const index = (req, res) => {
  db.Post.find({}, (err, post) => {
    if (err) return res.status(404).json({ error: err.message });
    return res.status(200).json({
      post,
      requestedAt: new Date().toLocaleDateString(),
    });
  });
};

const create = (req, res) => {
  db.Post.create(req.body, (err, createdPost) => {
    if (err) return res.status(404).json({ error: err.message });
    return res.status(200).json(createdPost);
  });
};

const destroy = (req, res) => {
  db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
    if (!deletedPost) return res.status(404).json({ error: "Post not found" });
    if (err) return res.status(404).json({ error: err.message });
    return res.status(200).json({
      message: "deleted",
    });
  });
};

const update = (req, res) => {
  db.Post.findByIdAndUpdate(
    req.params.id,
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
  index,
  create,
  destroy,
  update,
};
