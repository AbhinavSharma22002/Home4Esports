const mongoose = require("mongoose");
const User = require("./User");
const { Schema } = mongoose;
const TeamSchema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true
  },
  image:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  teamMembers:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true
  }]
});
const Team = mongoose.model("team", TeamSchema);
module.exports = Team;