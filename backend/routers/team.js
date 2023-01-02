const express = require('express');
const router = express.Router();
const Tournament= require("../database/Tournament");
const Team= require("../database/Team");
const User = require("../database/User");
const fetchuser = require('../middleware/Fetchuser');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_secret = process.env.JWT_secret;

router.post("/getAll",async(req,res)=>{
    try {
        let tier = req.body.tier;
        let teams = await Team.find({tier: tier});
        return res.status(200).json({teams});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
});


//invitation link 
async function generateLink(teamId, expirationDate) {
  console.log(teamId);
  let payload = {
    team: {
      id: teamId,
    },
  };
  const authData = await jwt.sign(payload, JWT_secret,{expiresIn:"1h"});
  return authData;
}



router.post("/getById",async (req,res)=>{
  try {
      let id = req.body.id;
      let teams = await Team.findById(id);
      return res.status(200).json({teams});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
});

router.post("/create",
fetchuser,
async (req, res) => {

    let userId = req.user.id;

    const leader = await User.findById(userId).select("-password");
    //check for access level
    const { teamName,image,tournamentId} = req.body;
   let tournament = await 
    Tournament.findById(tournamentId);

    try {
      if(tournament.noOfTeams<tournament.team.length){
        let team = await Team.create({
            teamName: teamName,
            author: leader._id,
            image: image,
            teamMembers: [{
                id: leader._id
            }]
        });
        tournament.team.push({
          id:team._id
        });
        await Tournament.findOneAndUpdate({_id:tournamentId},tournament);
        let link = process.env.FRONT + "/newMember?new="+  await generateLink(team._id,new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));

        return res.status(200).json({link});
      }
      else{
        return res.status(400).json({error: 'Teams Full!!'});
      }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});

router.post("/newMember/:key",
fetchuser,
async (req, res) => {
    let userId = req.user.id;
    let team_id = req.params.key;
    const data = jwt.verify(team_id,JWT_secret);
    team_id = data.team.id;
    const user = await User.findById(userId).select("-password");
    let teams = await Team.findById(team_id);
    //check for access level
  try {
    for(let i = 0;i<teams.teamMembers.length;i++){
        if(teams.teamMembers[i].id===user._id){
            return res.status(200).send("You have already registered.");
        }
    }
    teams.teamMembers.push({
        id: user._id
    })
    let team = await Team.findOneAndUpdate({_id: team_id}, teams);
    return res.status(200).send("Success");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.post('/getByIdAndUpdate',async (req,res)=>{
  const {id, type,body} = req.body;

  let team = await Team.findById(id);
  if(!type)
  team.clicked += 1;
  else{
    for(let i =0;i<type.length;i++){
      let t1 = type[i];
      let b1 = body[i];
      team.t1 = b1;
    }
  }
  try{
  await Team.findOneAndUpdate({_id: team._id}, team);
  let arr=[];
  for(let i = 0;i<team.teamMembers.length;i++){
    let id = team.teamMembers[i].id;
    arr.push(await User.findById(id));
  }
  res.status(200).json({team:team,members: arr});
  }catch(error){
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;