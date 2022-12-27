const mongoose = require("mongoose");
const { Schema } = mongoose;
const formSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  game:{
    type: String,
    required: true
  },
  team: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Team"
}],
  teamSize:{
    type: Number,
    required: true
  },
  noOfTeams:{
    type: Number,
    required: true
  },
  startDate:{
    type: Date,
    required: true
  },
  
  author: {
    id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users"
      }
  }
});
const tournament = mongoose.model("form", formSchema);
module.exports = Video;

















