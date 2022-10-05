const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: {
    // type: mongoose.Schema.Types.ObjectId,
    type:String,
    // ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;
