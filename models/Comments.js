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

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;
