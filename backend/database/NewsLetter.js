const mongoose = require("mongoose");
const { Schema } = mongoose;
const NewsLetterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  }
});
const Letter = mongoose.model("newletters", NewsLetterSchema);
module.exports = Letter;