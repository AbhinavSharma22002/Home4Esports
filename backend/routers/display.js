const User = require("../database/User");
const express = require('express');
const router = express.Router();
const Display= require("../database/Display");
const Fetchuser = require('../middleware/Fetchuser');

router.get("/getAll",async(req,res)=>{
    try {
        let display = await Display.find({});
        return res.status(200).json({display});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
      }
});
router.post("/create",
Fetchuser,
async (req, res) => {

    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    //check for access level
  const {title, team1Logo,team2Logo,date,videoLink,time,tournamentLogo} = req.body;
  const allDisplay = await Display.find();
  if(allDisplay.length>0){
    return res.status(400).send("Already Registered 1 match");
  }
  try {
    let display = await Display.create({
      tournamentLogo:tournamentLogo,
        title:title,
        team1Logo: team1Logo,
        team2Logo: team2Logo,
        date:date,
        time:time,
        videoLink:videoLink,
        author: {
            id: user._id
        }
      });
    return res.status(200).send("Success");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});
module.exports = router;