const express = require('express');
const router = express.Router();
const Match = require("../database/matches");
const User = require("../database/User");
const fetchuser = require('../middleware/Fetchuser');
const Tournament = require("../database/Tournament");
const Team = require("../database/Team");

const createMatch = async (teams,date,time,results) => {
  try {
    let final_teams = [];
    for(let i = 0;i<teams.length;i++){
      const team = await Team.findOne({tag: teams[i]}).select("_id");
      final_teams.push(team);
    }
    if(results){
      const match_id = await Match.create({
        teams:final_teams,
        date:date,
        time:time,
        results:results
      });
      return match_id._id;
    }
    else{
      const match_id = await Match.create({
        teams:teams,
        date:date,
        time:time
      });
      return match_id._id;
    }
    
  } catch (error) {
    console.error(error.message);
  }
};

router.post("/getAndUpdateMatches",fetchuser, async (req,res)=>{
  //access
  try{
    const userID = req.user.id;
  let {matches,tourId} = req.body;
  let tournament = await Tournament.findOne({_id: tourId, author: userID});
  if(tournament){
    let presentMatches = tournament.matches;
    for(let i = 0;i<presentMatches.length;i++){
    await Match.findByIdAndDelete(presentMatches[i].id);
    }
    tournament.matches = [];
    let temP_arr = [];
    for(let i = 0;i<matches.length;i++){
      let newCreated = await createMatch(matches[i].teams,matches[i].date,matches[i].time,matches[i].results);
      temP_arr.push({
        id: newCreated
      });
    }
    tournament.matches = temP_arr;
    await Tournament.findOneAndUpdate({_id: tournament._id}, tournament);
    res.status(200).send("Success");
  }
  else{
    res.status(200).send("No Tournament Exists with that ID");
  }
  }catch(error){
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

router.get("/previousMatches", async(req,res)=>{
    try {
        let matches = await Match.find().sort({date:1});
        // matches.forEach(async (match) => {
        //     await match.remove();
        //   });
        //   matches = [];
        console.log(matches);
          res.status(200).json({matches});
    } catch (error) {
        
    }
})


module.exports = router;