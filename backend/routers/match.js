const express = require('express');
const router = express.Router();
const Match = require("../database/matches");
const User = require("../database/User");
const fetchuser = require('../middleware/Fetchuser');
const Tournament = require("../database/Tournament");
const createMatch = async (req, res) => {

    const team1 = await Match.findById(req.body.team1Id);
    const team2 = await Match.findById(req.body.team2Id);


    let userId = req.user.id;
    const user = User.findById(userId).select("-password");
    //check for access level
  const {team1Id,team2Id,date,time,winner} = req.body;
  try {
    let match = Match.create({
        team1:team1Id,
        team2:team2Id,
        date:date,
        time:time,
        winner:winner,
        author: {
            id: user._id
        }
      });
    return res.status(200).send({
        team1: {
            _id: team1._id,
            name: team1.name
          },
          team2: {
            _id: team2._id,
            name: team2.name
          }
        });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
};

router.post("/getById", async(req,res)=>{
    try {
        let tournament = await Tournament.findById(req.params.id);
        tournament.matches.forEach(async (match) => {
            await match.remove();
          });
          tournament.matches = [];
          res.status(200).json({tournament});
    } catch (error) {
        
    }
})


module.exports = router;