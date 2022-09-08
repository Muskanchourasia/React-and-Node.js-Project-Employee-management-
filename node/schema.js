var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  email: String,
  gender: String,
  mob_no: String,
  role: { type: String, enun: ["junior", "senior", "lead"] },
  address: String,
  salary: Number,
  password: String,
});

userSchema.methods.comparePassword = function (password1, password2) {
  if (password1 !== password2) {
    return false;
  } else {
    return true;
  }
};

const User = mongoose.model("reactuser", userSchema);

module.exports = User;
