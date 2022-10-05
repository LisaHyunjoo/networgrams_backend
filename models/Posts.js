const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  like: {
    type: Number,
    default: 0,
  },
  comment: {
    type: [mongoose.Schema.Types.ObjectId],
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
  },
  name: {
    type: String,
  },
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
