const express = require('express');
const router = express.Router();
const User = require("../database/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const JWT_secret = process.env.JWT_secret;
const fetchUser = require("../middleware/Fetchuser");

router.post("/login",
[
  body("userEmail", "Enter a valid email").isEmail(),
  body("userPass", "Enter a valid password").exists(),
],
async (req, res) => {
  //If there are errors, return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { userEmail, userPass } = req.body;

  try {
    let user = await User.findOne({userEmail });

    if (!user) {
      return res
        .status(400)
        .json({ error: "please try to login with correct credintials" });
    }

    let passwordCompare = await bcrypt.compare(userPass, user.password);

    if (!passwordCompare) {
      return res
        .status(400)
        .json({ error: "please try to login with correct credintials" });
    }

    let data = {
      user: {
        id: user.id,
      },
    };
    const authData = await jwt.sign(data, JWT_secret);
    return res.json({ authData });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

router.post("/signup",
[
  body("regFName", "Enter your first Name").isLength({ min: 5 }),
  body("regFName", "Enter your last Name").isLength({ min: 5 }),
  body("regEmail", "Enter valid Email").isEmail(),
  body("regPassword", "Enter valid Password").isLength({ min: 5 }),
],async (req,res)=>{
   //If there are errors, return bad request
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array()});
   }

   const { regEmail, regPassword, fname,lname } = req.body;

   try {
     let user = await User.findOne({ regEmail });

     if (user !== null) {
       return res.status(400).json({ error: "please try some other email" });
     }

     let salt = await bcrypt.genSalt(saltRounds);
     let hash = await bcrypt.hash(regPassword, salt);

     user = await User.create({
       fname: fname,
       lname:lname,
       password: hash,
       email: regEmail
     });

     const data = {
       user: {
         id: user.id,
       },
     };
     const authData = await jwt.sign(data, JWT_secret);

     return res.json({ authData });
   } catch (error) {
     console.error(error.message);
     res.status(500).send("Some error occured");
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
module.exports = router;