const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
  },
  comment: {
    type: String,
  },
  content: {
    type: String,
    // required: true,
  },
  Image: {
    type: String,
  },
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
