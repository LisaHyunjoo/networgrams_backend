const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  comContent: {
    type: String,
    required: true,
  },
});

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    // ref: "Users"
  },
  like: {
    type: Number,
    default: 0,
  },
  comment: [commentSchema],

  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  date: Date,
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;