const express = require('express');
const router = express.Router();
const Tournament= require("../database/Tournament");
const User = require("../database/User");
const Team = require("../database/Team");
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
        let type = req.body.type;
        let tournament = await Tournament.findById(id);
        let arr = [];
        if(type==="suggestion"){
          for(let i = 0;i<tournament.team.length;i++){
            let d = tournament.team[i].id;
            let team = await Team.findById(d);
            if(team.teamMembers.length<tournament.teamSize){
              arr.push(team);
            }
          }
        }
        else{
        for(let i = 0;i<tournament.team.length;i++){
          let d = tournament.team[i].id;
          arr.push(await Team.findById(d))
        }
      }
        
      let date = new Date(tournament.startDate);
      var year = date.toLocaleString("default", { year: "numeric" });
      var month = date.toLocaleString("default", { month: "2-digit" });
      var day = date.toLocaleString("default", { day: "2-digit" });
      var formattedDate = year + "-" + month + "-" + day;

      tournament.startDate = formattedDate;
      return res.status(200).json({tournament,list: arr});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
      }
  });

  router.post("/getMyTournaments",Fetchuser,async(req,res)=>{
    let userId = req.user.id;
    try{
      let tournaments = await Tournament.find({author: userId});
      return res.status(200).json({tournaments});
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  });
  router.post("/create",
Fetchuser,
async (req, res) => {

    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    //check for access level
  const { name,description,game,teamSize,noOfTeams,startDate,priceMoney,noOfMatches,image} = req.body;
  try {
    let tournament = await Tournament.create({
        name: name,
        description: description,
        game: game,
        teamSize:teamSize,
        noOfTeams:noOfTeams,
        startDate:startDate,
        priceMoney:priceMoney,
        image:image,
        author: user._id,
        noOfMatches: noOfMatches
      });
    return res.status(200).send("Success");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.post('/getByIdAndUpdate',async (req,res)=>{
  const {id, type,body} = req.body;
  try{
  let tournament = await Tournament.findById(id);
  if(type==="deLete"){
    await Tournament.findByIdAndDelete(id);
    res.status(200).send("Success");
    return;
  }
    for(let i =0;i<type.length;i++){
      let t1 = type[i];
      let b1 = body[i];
      if(t1==="name"){
        tournament.name= b1;
      }
      if(t1==="description"){
        tournament.description= b1;
      }
      if(t1==="game"){
        tournament.game= b1;
      }
      if(t1==="teamSize"){
        tournament.teamSize= b1;
      }
      if(t1==="noOfTeams"){
        tournament.noOfTeams= b1;
      }
      if(t1==="startDate"){
        tournament.startDate= b1;
      }
      if(t1==="priceMoney"){
        tournament.priceMoney= b1;
      }
    }
  await Tournament.findOneAndUpdate({_id: tournament._id}, tournament);
  res.status(200).send("Success");

  }catch(error){
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});
//code for tournament bracket

router.get('/bracket/:id', async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    res.json({
      bracket:generateBracket(tournament.team)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

function generateBracket(teams) {
  // Sort teams by seed
  const sortedTeams = teams;
console.log(teams);
  // Initialize bracket
  const bracket = [];

  const rounds = Math.ceil(Math.log2(sortedTeams.length));
  for (let i = 0; i < rounds; i++) {
      const round = [];
      const roundTeams = teams.length / Math.pow(2, i + 1);
      for (let j = 0; j < roundTeams; j++) {
        const team1 = teams[j];
        const team2 = teams[teams.length - j - 1];
        round.push([team1, team2]);
      }
      bracket.push(round);
      console.log(bracket);
    } 

  // Assigning teams for the first round
  let numByes = Math.pow(2, rounds) - sortedTeams.length;

  let index= 0;
  for (let i = 0; i < bracket[0].length; i++) {
    if (numByes > 0) {
      bracket[0][i][0] = { name: 'Bye' };
      numByes--;
    } else {
      bracket[0][i][0] = {team:sortedTeams[index]};
      index++;
    }
    bracket[0][i][1] = {team:sortedTeams[index]};
    index++;
  }

  // Assign teams to remaining rounds
  for (let i = 1; i < bracket.length; i++) {
    for (let j = 0; j < bracket[i].length; j++) {
      const match = bracket[i][j];
      const previousMatch = bracket[i - 1][Math.floor(j / 2)];
      if (j % 2 === 0) {
        match[0] = previousMatch[0] && previousMatch[0].winner ? previousMatch[0].winner : null;
        match[1] = previousMatch[1];
      } else {
        match[0] = previousMatch[0];
        match[1] = previousMatch[1] && previousMatch[1].winner ? previousMatch[1].winner : null;
      }
    }
  }

  return bracket;
}


module.exports = router;