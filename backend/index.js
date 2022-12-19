const connectToMongo = require("./backend");
connectToMongo();
const express = require('express');
const app = express();
const server = require('http').Server(app);
const Cors = require("cors");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors());

require('dotenv').config({path:__dirname+'/bin/.env'});

const indexRouter = require("./routers/index");
const userRouter = require("./routers/user");
app.use('/',indexRouter);
app.use('/api/user/',userRouter);

const mongoURL = 
server.listen(process.env.PORT,()=>{
    console.log(`RUnning on ${process.env.PORT}`);
})
