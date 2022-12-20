const mongoose = require('mongoose');
const uri = "mongodb+srv://abc:abc@cluster0.pj6qno6.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
const connectToMongo = async()=>{
    await mongoose.connect(uri,
         ()=>{
        console.log("Connected to database")
    });
}

module.exports = connectToMongo;