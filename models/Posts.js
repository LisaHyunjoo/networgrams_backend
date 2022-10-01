const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  like: {
    type: Number,
    default: 0,
  },
  comment: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  }
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
