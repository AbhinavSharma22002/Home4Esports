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
  image:{
    type: String,
    required: true
  },
  team: [{
    id:{type:mongoose.Schema.Types.ObjectId,
    ref: "team"
    }

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
  priceMoney:{
    type: Number,
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
module.exports = tournament;

















