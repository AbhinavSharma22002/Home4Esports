const express = require('express');
const app = express();
const server = require('http').Server(app);
const { initializeApp } = require('firebase-admin/app');

const firebaseConfig = {
  apiKey: "AIzaSyCzDS3vRa0bphCvUIPvS-0rTiijvril1DI",
authDomain: "commerce-79534.firebaseapp.com",
databaseURL: "https://commerce-79534-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "commerce-79534",
storageBucket: "commerce-79534.appspot.com",
messagingSenderId: "480750464978",
appId: "1:480750464978:web:d1b59f13fe70d07bfda20b",
measurementId: "G-TZ3JSPQ9E1"
};

  
// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const Cors = require("cors");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors());

require('dotenv').config({path:__dirname+'/bin/.env'});

const database = require("./database/connectMongo");
database();

const indexRouter = require("./routers/index");
app.use('/',indexRouter);

const mongoURL = 
server.listen(process.env.PORT,()=>{
    console.log(`RUnning on ${process.env.PORT}`);
})
