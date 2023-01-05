var mongoose = require("mongoose");
const { Schema } = mongoose;
var requestSchema = new Schema({
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

const Request = mongoose.model("request", requestSchema);
module.exports = Request;