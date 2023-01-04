const mongoose = require("mongoose");
const { Schema } = mongoose;
const displaySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tournamentLogo: {
    type: String,
    required: true
  },
  team1Logo: {
    type: String,
    required: true
  },
  team2Logo:{
    type: String,
    required: true
  },
  date:{
    type:Date,
    required: true
  },
  time:{
    type: String,
    required: true
  },
  videoLink: {
    type: String,
    validate: {
       validator: function(v) {
            return /^https:\/\/www.youtube.com\/.*$/.test(v);
       },
       message: props => `${props.value} is not a valid youtube link.`
    },
    required: [true, 'Youtube video link is required.']
  },
  author: {
    id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users"
      }
  }
});
const Display = mongoose.model("display", displaySchema);
module.exports = Display;