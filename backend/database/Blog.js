const mongoose = require("mongoose");
const { Schema } = mongoose;
const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  image: [{
    pk:{
      type: String,
      required: true
    },
    link:{
      type: String,
      required: true
    }
      
  }],
  body: {
    type: String
  },
  author: {
      id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
      username: {
        type: String
      }
    },
  comments: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Comment"
    }]
});
const Blog = mongoose.model("blogs", BlogSchema);
module.exports = Blog;