const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: {
    type: [String],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Comeent = mongoose.model("Comment", commentSchema);

module.exports = Comment;
