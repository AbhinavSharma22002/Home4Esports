const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  size:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  author: {
    id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users"
      }
  }
});
const Product = mongoose.model("products", ProductSchema);
module.exports = Product;