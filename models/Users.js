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
  post: { type: [mongoose.Schema.Types.ObjectId] },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
