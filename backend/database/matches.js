const mongoose = require("mongoose");
const {schema} = mongoose;

const matchSchema = new mongoose.Schema({
      teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team'
      }],
      tournament:{
        type: String,
        required: true
      },
      tournamentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'form'
      },
      author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
      },
      link:{
        type: String,
        required: true
      },
      round:{
        type: String,
        required: true
      },
      date:{
        type: Date,
        required: true
      },
      time:{
         type: String,
         required: true
      },
      results: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team'
      }
});
const Match  = mongoose.model("match",matchSchema);
module.exports = Match;
