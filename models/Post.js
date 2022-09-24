const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: [String],
    required: true,
  },
  like: {
    type: Number,
  },
  comment: {
    type: [String],
  },
  content: {
    type: String,
    // required: true,
  },
  Image: {
    type: String,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
