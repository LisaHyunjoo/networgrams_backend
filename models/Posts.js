const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  like: {
    type: Number,
    default: 0,
  },
  comment: [{
		type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
	}],
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
