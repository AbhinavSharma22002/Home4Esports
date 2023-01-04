var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    Date: {type: Date, default: Date.now},
    Massage: {
        type: String
    },
    Name:{
        type: String
    },
    Email:{
        type:String
    },
    Subject:{
        type:String
    },
    // comments: [{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: "Comment"
    // }]
});

module.exports = mongoose.model("Comment", commentSchema);