const express = require('express');
const router = express.Router();
const Comment= require("../database/Comment");
const User = require("../database/User");
const fetchuser = require('../middleware/Fetchuser');

router.post("/create",async(req,res)=>{
    try{
          const {respondName,respondEmail,respondSubject,respondMassage,respondContact} = req.body;
          const data = await Comment.create({
            Massage: respondMassage,
            Name: respondName,
            Email: respondEmail,
            Subject: respondSubject,
            Contact:respondContact
          });
          res.status(200).send("Success");

    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
  })
module.exports = router;