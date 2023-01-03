const express = require('express');
const router = express.Router();
const User = require("../database/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const JWT_secret = process.env.JWT_secret;
const fetchUser = require("../middleware/Fetchuser");
//login
router.post("/login",
[
  body("email", "Enter a valid email").isEmail(),
  body("password", "Enter a valid password").exists(),
],
async (req, res) => {
  //If there are errors, return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  try {
    let user = await User.findOne({email });

    if (!user) {
      return res
        .status(400)
        .json({ error: "please try to login with correct credentials" });
    }

    let passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      return res
        .status(400)
        .json({ error: "please try to login with correct credentials" });
    }

    let data = {
      user: {
        id: user.id,
      },
    };
    const authData = await jwt.sign(data, JWT_secret, { expiresIn: "1h"});
    return res.json({ authData });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});
//signup
router.post("/signup",
[
  body("name", "Enter your first Name").isLength({ min: 5 }),
  body("Lname", "Enter your last Name").isLength({ min: 5 }),
  body("email", "Enter valid Email").isEmail(),
  body("password", "Enter valid Password").isLength({ min: 5 }),
],async (req,res)=>{
   //If there are errors, return bad request
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array()});
   }

   const { email, password, name,Lname} = req.body;

   try {
     let user = await User.findOne({ email });

     if (user !== null) {
       return res.status(400).json({ error: "please try some other email" });
     }

     let salt = await bcrypt.genSalt(saltRounds);
     let hash = await bcrypt.hash(password, salt);

     user = await User.create({
       fname: name,
       lname:Lname,
       password: hash,
       email: email
     });

     const data = {
       user: {
         id: user.id,
       },
     };
     const authData = await jwt.sign(data, JWT_secret,{expiresIn:"1h"});

     return res.json({ authData });
   } catch (error) {
     console.error(error.message);
     res.status(500).send("Some error occured");
   }
});


router.post("/getByIdAndUpdate",fetchUser,async(req,res)=>{
  const {id, type,body} = req.body;
  try {
    const superadmin = await User.findById(req.user.id);
    if(superadmin && superadmin.role==='superadmin'){
      const user = await User.findById(id).select("-password -date");
      
    for(let i =0;i<type.length;i++){
      let t1 = type[i];
      let b1 = body[i];
      if(t1==="fname"){
        user.fname= b1;
      }
      if(t1==="email"){
        user.email= b1;
      }
      if(t1==="role"){
        user.role= b1;
      }
    }
      await User.findOneAndUpdate({_id: user._id}, user);
      res.status(200).send("Success");
    }
    else{
      res.status(401).json({value:"Don't have access to view!!"});
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});
router.post("/getById",fetchUser,async(req,res)=>{
  try {
    const superadmin = await User.findById(req.user.id);
    if(superadmin && superadmin.role==='superadmin'){
      const user = await User.findById(req.body.id).select("-password -date");
      res.status(200).json({user});
    }
    else{
      res.status(401).json({value:"Don't have access to view!!"});
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});
router.get(
  "/status",fetchUser,
  async (req, res) => {
    try {
      let userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
router.post("/getAll",fetchUser,async(req,res)=>{
  try {
    const superadmin = await User.findById(req.user.id);
    if(superadmin && superadmin.role==='superadmin'){
      const users = await User.find().select("-password -date");
      res.status(200).json({users});
    }
    else{
      res.status(401).json({value:"Don't have access to view!!"});
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});
router.post("/update",fetchUser,async(req,res)=>{
  try {
    let user= req.body.user;
    let user_id = req.body.id;
    await User.findByIdAndUpdate(user_id, user,function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
    });
    res.send("Success");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});
router.post("/getById",async(req,res)=>{
  try {
    const user= req.body.id;    
    let successUser = await User.findById(user).select("-password -email -date -role");
    res.status(200).json(successUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;