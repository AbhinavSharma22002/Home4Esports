const express = require('express');
const app = express();
const server = require('http').Server(app);

const Cors = require("cors");


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors());

require('dotenv').config({path:__dirname+'/bin/.env'});

//const database = require("./database/connectMongo");
//database();

const indexRouter = require("./routers/index");
app.use('/',indexRouter);

const mongoURL = 
server.listen(process.env.PORT,()=>{
    console.log(`RUnning on ${process.env.PORT}`);
})
