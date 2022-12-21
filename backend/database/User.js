const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname:{
    type:String,
    required:true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
   role: {
    type: String,
    default: "local",
    required: true
}
});
const User = mongoose.model("users", UserSchema);
module.exports = User;