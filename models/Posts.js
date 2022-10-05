const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
=======
>>>>>>> 002a8510cdb425ddbaeadc260346494bd1032b16
  like: {
    type: Number,
    default: 0,
  },
<<<<<<< HEAD
  comment: [{
		type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
	}],
=======
  comment: {
    type: [mongoose.Schema.Types.ObjectId],
  },
>>>>>>> 002a8510cdb425ddbaeadc260346494bd1032b16
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
<<<<<<< HEAD
  }
=======
  },
  name: {
    type: String,
  },
>>>>>>> 002a8510cdb425ddbaeadc260346494bd1032b16
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
