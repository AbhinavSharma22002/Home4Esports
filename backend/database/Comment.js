var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    date: {type: Date, default: Date.now},
    text: {
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
    }
});

module.exports = mongoose.model("Comment", commentSchema);