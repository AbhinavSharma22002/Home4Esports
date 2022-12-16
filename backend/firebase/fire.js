const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

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

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
module.exports =  auth;