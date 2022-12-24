const mongoose = require("mongoose");
const { Schema } = mongoose;
const videoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre:{
    type: Number,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  link: {
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
const Video = mongoose.model("videos", videoSchema);
module.exports = Video;

















