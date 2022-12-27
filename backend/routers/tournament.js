const express = require('express');
const router = express.Router();
const Tournament= require("../database/Tournament");
const User = require("../database/User");
const Fetchuser = require('../middleware/Fetchuser');

router.get("/getAll",async(req,res)=>{
    try {
        let tournament = await await Tournament.find({});
        return res.status(200).json({tournament});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
      }
});
router.post("/getById",async (req,res)=>{
    try {
        let id = req.body.id;
        let tournament = await await Tournament.findById(id);
        return res.status(200).json({tournament});
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
  const { name,description,game,team,teamSize,noOfTeams,startDate,priceMoney,image} = req.body;
  try {
    let tournament = await Tournament.create({
        name: name,
        description: description,
        game: game,
        team:team,
        teamSize:teamSize,
        noOfTeams:noOfTeams,
        startDate:startDate,
        priceMoney:priceMoney,
        image:image,
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