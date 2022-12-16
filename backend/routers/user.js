const express = require('express');
const router = express.Router();
const auth = require("../firebase/fire");
const {signInWithEmailAndPassword,createUserWithEmailAndPassword} = require('firebase/auth');
router.get("/status",(req,res)=>{
	auth.onAuthStateChanged((user) => {
		res.send(user);
	});
});

router.post("/login",(req,res)=>{
    const reqData = req.body;
    signInWithEmailAndPassword(auth, reqData.userEmail, reqData.userPass)
    .then(
        res.status(200)
    )
  .catch(err => res.send(400));
});

router.post("/signup",(req,res)=>{
    const reqData = req.body;
    createUserWithEmailAndPassword(auth, reqData.regEmail,reqData.regPassword)
      .then((res) => {
          res.status(200).send(res.user)
        })
      .catch(err => res.send(400));
});

module.exports = router;