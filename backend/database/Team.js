const mongoose = require("mongoose");
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
  tier:{
    type: Number,
    default: 3,
    required: true
  },
  tag:{
    type: String,
    required: true
  },
  clicked:{
    type: Number,
    default: 0,
    required: true
  },
  teamMembers:[{
    id: {type: mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true
    }
  }],
  requests:[{
    id: {type: mongoose.Schema.Types.ObjectId,
    ref:"Request"
    }
  }],
  link:{
    type: String
  }
});
const Team = mongoose.model("team", TeamSchema);
module.exports = Team;