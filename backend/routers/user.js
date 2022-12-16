const express = require('express');
const router = express.Router();
const auth = require("../firebase/fire");
const {signInWithEmailAndPassword,createUserWithEmailAndPassword} = require('firebase/auth');
router.get("/status",(req,res)=>{
	auth.onAuthStateChanged((user) => {
		res.json(user);
	});
});

router.post("/login",(req,res)=>{
  try{
    signInWithEmailAndPassword(auth, req.body.userEmail, req.body.userPass)
    .then((user)=>{
      res.status(200).send({status: "Success"});
    }
    ).catch(err=> res.status(400).send({status: "Unsuccess"}))
  }
  catch(error){
    res.status(500).send({status: "Internal_Error"});
  }
});

router.post("/signup",(req,res)=>{
  try{
    createUserWithEmailAndPassword(auth, req.body.regEmail,req.body.regPassword)
    .then((user)=>{
      res.status(200).send({status: "Success"});
    }
    ).catch(err=>  res.status(400).send({status: "Unsuccess"}))
  }
  catch(error){
    res.status(500).send({status: "Internal_Error"});
  }
});

module.exports = router;