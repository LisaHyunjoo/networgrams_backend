const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  content: {
    type: String,
    required: true,
  },
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;
