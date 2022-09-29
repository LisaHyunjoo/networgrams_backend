const db = require("../models");

const index = (req, res) => {
  db.Posts.find({}, (err, post) => {
    if (err) return res.status(404).json({ error: err.message });
    return res.status(200).json({
      post,
      requestedAt: new Date().toLocaleDateString(),
    });
  });
};

const create = (req, res) => {
  db.Posts.create(req.body, (err, createdPost) => {
    if (err) return res.status(404).json({ error: err.message });
    return res.status(200).json(createdPost);
  });
};

const destroy = (req, res) => {
  db.Posts.findByIdAndDelete(req.params.id, (err, deletedPost) => {
    if (!deletedPost) return res.status(404).json({ error: "Post not found" });
    if (err) return res.status(404).json({ error: err.message });
    return res.status(200).json({
      message: "deleted",
    });
  });
};

const edit = (req, res) => {
  db.Posts.findById(req.params.id, (err, editPost) => {
    if (err) return res.status(404).json({ error: err.message });
    return res.status(200).json({ editPost });
  });
};

const update = (req, res) => {
  db.Posts.findByIdAndUpdate(
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
  edit,
  update,
};
