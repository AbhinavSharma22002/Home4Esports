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
const newsletterRouter = require("./routers/newsletter");
const blogRouter = require("./routers/blog");
const productsRouter = require("./routers/products");
const imageRouter = require("./routers/image");
app.use('/',indexRouter);
app.use('/api/user/',userRouter);
app.use('/api/newsletter/',newsletterRouter);
app.use('/api/blog/',blogRouter);
app.use('/api/products/',productsRouter);
app.use('/aws/image/',imageRouter);
server.listen(process.env.PORT,()=>{
    console.log(`RUnning on ${process.env.PORT}`);
})
