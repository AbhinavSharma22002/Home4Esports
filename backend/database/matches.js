const mongoose = require("mongoose");
const {schema} = mongoose;

const matchSchema = new mongoose.Schema({
      team1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
      },
      team2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
      },
      date: Date,
      time: String,
      winner: {
        type: Boolean,
        default: false
      }
});
const Match  = mongoose.model("match",matchSchema);
module.exports = Match;
