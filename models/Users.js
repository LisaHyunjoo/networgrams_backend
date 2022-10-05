const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
  post:[{
		type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
	}],
	like:[{
		type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
	}],
	comment:[{
		type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
  }]
=======
  post: { type: [mongoose.Schema.Types.ObjectId] },
>>>>>>> 002a8510cdb425ddbaeadc260346494bd1032b16
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
