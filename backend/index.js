require('dotenv').config();
const connectToMongo = require("./backend");
connectToMongo();
const express = require('express');4
const cron = require('node-cron');
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
const videoRouter = require("./routers/video");
const teamRouter = require("./routers/team");
const tournamentRouter = require('./routers/tournament');
const matchRouter = require('./routers/match');
const bestMatchRouter = require('./routers/display');
const contactRouter = require('./routers/contact');
app.use('/',indexRouter);
app.use('/api/user/',userRouter);
app.use('/api/newsletter/',newsletterRouter);
app.use('/api/blog/',blogRouter);
app.use('/api/products/',productsRouter);
app.use('/aws/image/',imageRouter);
app.use('/api/video/',videoRouter);
app.use("/api/team/",teamRouter);
app.use('/api/tournament/',tournamentRouter);
app.use('/api/match/',matchRouter);
app.use('/api/display',bestMatchRouter);
app.use('/api/contact',contactRouter);

const Teams = require('./database/Team');
const Display = require('./database/Display');
const teamUpdate = async ()=>{
    let teams = await Teams.find({});
    for(let i=0;i<teams.length;i++){
        let clicked = teams[i].clicked;
        if(clicked < 50000){
            teams[i].tier= 3;
            let team = await Teams.findOneAndUpdate({_id: teams[i]._id}, teams[i]);
        }else{
            teams[i].tier=2;
            let team = await Teams.findOneAndUpdate({_id: teams[i]._id}, teams[i]);
        }        
    }
}

const updateBestMatch = async ()=>{
    let match = await Display.find();
    match = match[0];
    let presentDate = new Date();
    if(match.date>presentDate){
        await Display.findByIdAndDelete(match._id);
    }    
};


cron.schedule('0 0 * * *', () => {
    console.log('Running cron job');
    teamUpdate();
    updateBestMatch();
});
server.listen(process.env.PORT,()=>{
    console.log(`RUnning on ${process.env.PORT}`);
})
