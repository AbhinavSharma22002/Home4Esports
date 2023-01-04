const express = require('express');
const router = express.Router();
const Match = require("../database/matches");
const User = require("../database/User");
const fetchuser = require('../middleware/Fetchuser');
const Tournament = require("../database/Tournament");
const Team = require("../database/Team");

const createMatch = async (teams,date,time,results,round,link) => {
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
        results:results,
        round:round,
        link: link
      });
      return match_id._id;
    }
    else{
      const match_id = await Match.create({
        teams:teams,
        date:date,
        time:time,
        round: round,
        link: link
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
      let newCreated = await createMatch(matches[i].teams,matches[i].date,matches[i].time,matches[i].results,matches[i].round,matches[i].link);
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
        let arr = [];
        matches.forEach(async (match) => {
           let date = match.date;
           let time = match.time.split(":");
           date.setHours(time[0]);
           date.setMinutes(time[1]);
           date.setSeconds(time[2]);
           let presentDate = new Date();
           if(date.getDate()<presentDate.getDate()){
           let match_teams = match.teams;

           let team_arr =[];
           for(let i=0;i<match_teams.length;i++){
              const each_team = await Team.findById(match_teams[i]);
              team_arr.push(each_team);
           }

           matches.teams = team_arr;
           
          arr.push({
            imageone: matches.teams[0].image,
            alt1: 'game name 1',
            imagetwo: matches.teams[1].image,
            alt2: 'game name 2',
            title: 'Tournament Name',
            matchdate: matches.date.getDate(),
            matchtime: `Time: ${matches.date.getTime()}`,
            playercount: `${matches.teams.length} Players` ,
            groupcount: matches.round
          });
          }
          });
          matches = arr; 
          res.status(200).json({matches});
    } catch (error) {
      console.error(error);
      res.status(400).send("Some error Occured");
        
    }
})
router.get("/todayMatches", async(req,res)=>{
  try {
      let matches = await Match.find().sort({date:1});
      let arr = [];
        matches.forEach(async (match) => {
           let date = match.date;
           let time = match.time.split(":");
           date.setHours(time[0]);
           date.setMinutes(time[1]);
           date.setSeconds(time[2]);
           let presentDate = new Date();
           if(date.getDate()===presentDate.getDate()){
           let match_teams = match.teams;
           let team_arr =[];
           for(let i=0;i<match_teams.length;i++){
              const each_team = await Team.findById(match_teams[i]);
              team_arr.push(each_team);
           }
           matches.teams = team_arr;
            
          arr.push({
            imageone: matches.teams[0].image,
            alt1: 'game name 1',
            imagetwo: matches.teams[1].image,
            alt2: 'game name 2',
            title: 'Tournament Name',
            matchdate: matches.date.getDate(),
            matchtime: `Time: ${matches.date.getTime()}`,
            playercount: `${matches.teams.length} Players` ,
            groupcount: matches.round
          });
         }
         });
         matches = arr; 
        res.status(200).json({matches});
  } catch (error) {
    console.error(error);
    res.status(400).send("Some error Occured");
  }
})

router.get("/futureMatches", async(req,res)=>{
  try {
      let matches = await Match.find().sort({date:1});
      let arr = [];
        matches.forEach(async (match) => {
           let date = match.date;
           let time = match.time.split(":");
           date.setHours(time[0]);
           date.setMinutes(time[1]);
           date.setSeconds(time[2]);
           let presentDate = new Date();
           if(date.getDate()>presentDate.getDate()){
           let match_teams = match.teams;

           let team_arr =[];
           for(let i=0;i<match_teams.length;i++){
              const each_team = await Team.findById(match_teams[i]);
              console.log(match_teams[i]);
              console.log(each_team);
              team_arr.push(each_team);
           }
           match.teams = team_arr;
            
          arr.push({
            imageone: matches.teams[0].image,
            alt1: 'game name 1',
            imagetwo: matches.teams[1].image,
            alt2: 'game name 2',
            title: 'Tournament Name',
            matchdate: matches.date.getDate(),
            matchtime: `Time: ${matches.date.getTime()}`,
            playercount: `${matches.teams.length} Players` ,
            groupcount: matches.round
          });
         }
         });
         matches = arr; 
        res.status(200).json({matches});
  } catch (error) {
    console.error(error);
    res.status(400).send("Some error Occured");
      
  }
})


module.exports = router;