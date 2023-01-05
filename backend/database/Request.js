var mongoose = require("mongoose");

var requestSchema = new mongoose.Schema({
    Date: {type: Date, default: Date.now},
    Team:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team'
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }
});

module.exports = mongoose.model("Request", requestSchema);