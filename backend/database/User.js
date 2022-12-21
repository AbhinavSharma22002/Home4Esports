const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  fName,lName:{
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  role: {
    type: String,
    enum: ["local", "admin"],
    default: "local"
},
appointments: {
    type: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment"
        }
    ],
    default: function () {
        return this.role === "local" ? undefined : this.value;
    },
    required: function () {
        return this.role === "admin" ? false : true;
    }
}
});
const User = mongoose.model("users", UserSchema);
module.exports = User;