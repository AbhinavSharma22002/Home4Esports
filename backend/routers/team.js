const express = require('express');
const router = express.Router();
const Tournament= require("../database/Tournament");
const Team= require("../database/Team");
const User = require("../database/User");

const Request = require("../database/Request");

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
async function generateLink(teamId,tournamentId, expirationDate) {
  let payload = {
    team: {
      id: teamId,
      tournamentId: tournamentId
    },
  };
  const authData = await jwt.sign(payload, JWT_secret,{expiresIn:"4d"});
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

    const leader = await User.findById(userId).select("-password -image");
    //check for access level
    const { teamName,image,tournamentId} = req.body;
   let tournament = await 
    Tournament.findById(tournamentId);

    try {
      if(tournament.noOfTeams>tournament.team.length){
        
        let team = await Team.create({
            teamName: teamName,
            author: leader._id,
            image: image,
            teamMembers: [{
                id: leader._id
            }],
            tag: teamName.substring(0,3)
        });

        tournament.team.push({
          id:team._id
        });
        
        await Tournament.findOneAndUpdate({_id:tournamentId},tournament);

        let link = process.env.FRONT + "/newRequest?new="+  await generateLink(team._id,tournamentId,new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
        team.link = link;
        
        await Team.findOneAndUpdate({_id:team._id},team);
        
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

router.post("/getMyTeams",fetchuser,async(req,res)=>{
    let userId = req.user.id;
    try{
      let teams = await Team.find({author: userId});
      return res.status(200).json({teams});
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
});
router.post("/getTeamById",fetchuser,async(req,res)=>{
  const {teamId} = req.body;
  try{
    const team = await Team.findById(teamId);
    const user = await User.findById(req.user.id).select("-password -image");
    if((team.author).equals(user._id)){
      let arr = [];
      let fin_arr = [];
        for(let i = 0;i<team.requests.length;i++){
        let request = await Request.findById(team.requests[i].id);
        if(request){
          let user1 = await User.findById(request.User).select("-password -image");
          request.User =  user1;
          request.Team = team;
          arr.push(request);
          fin_arr.push(team.requests[i]);
        }     
        else{
          try{
            await Request.findByIdAndDelete(team.requests[i].id);
          }
          catch(error){
            console.error(error);
          }
        }
      }
      team.requests = fin_arr;
      console.log(team);
      await Team.findOneAndUpdate({_id: team._id}, team);
      res.status(200).json({requests: arr});
    }
    else{
      res.status(400).send("Unauthorized");
    }

  }catch(error){
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});

router.post("/newMember",
fetchuser,
async (req, res) => {
    const {requestId,tag} = req.body;
    if(tag==='delete'){
      //delete
      let request = await Request.findById(requestId);
      let teams = await Team.findById(request.Team);
      const user = await User.findById(req.user.id).select("-password -image");
      if((user._id).equals(request.User)){
        try {
          let arr = [];
          for(let i = 0;i<teams.requests.length;i++){
            if(teams.requests[i].id===request._id){
              continue;
            }
            else{
              arr.push(teams.requests[i]);
            }
          }
          teams.requests = arr;
      await Team.findOneAndUpdate({_id: teams._id}, teams);
      await Request.findByIdAndDelete(request._id);
      return res.status(200).send("Success");
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
  } else{
    res.status(400).send("User doesn't exists");
  }
    }
    else{
      //accept
      let request = await Request.findById(requestId);
  let teams = await Team.findById(request.Team);
  const user = await User.findById(req.user.id).select("-password -image");
    if(user){
  try {
    for(let i = 0;i<teams.teamMembers.length;i++){
        if(teams.teamMembers[i].id===user._id.toString()){
            return res.status(400).send("You have already registered.");
        }
    }
      teams.teamMembers.push({
          id: request.User
      });
      let arr = [];
          for(let i = 0;i<teams.requests.length;i++){
            if(teams.requests[i].id===request._id){
              continue;
            }
            else{
              arr.push(teams.requests[i]);
            }
          }
          teams.requests = arr;
      await Team.findOneAndUpdate({_id: teams._id}, teams);
      await Request.findByIdAndDelete(request._id);
      return res.status(200).send("Success");
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
  } else{
    res.status(400).send("User doesn't exists");
  }
    }
    
});


router.post("/newRequest/:key",
fetchuser,
async (req, res) => {
    let userId = req.user.id;
    let team_id = req.params.key;
    const {image} = req.body;
    const data = jwt.verify(team_id,JWT_secret);
    team_id = data.team.id;
    tour_id = data.team.tournamentId;
    let tournament = await Tournament.findById(tour_id).select("teamSize");
    const user = await User.findById(userId).select("-password -image");
    let teams = await Team.findById(team_id);
    //check for access level
  try {
    for(let i = 0;i<teams.teamMembers.length;i++){
        if(teams.teamMembers[i].id===user._id.toString()){
            return res.status(400).send("You have already registered.");
        }
    }
    if(tournament.teamSize>teams.teamMembers.length){
      const request = await Request.create({
        Team: teams._id,
        User: user._id
      });
      teams.requests.push({
        id: request._id
      });
      user.image = image;
      let team = await Team.findOneAndUpdate({_id: team_id}, teams);
      await User.findOneAndUpdate({_id: user._id},user);
      return res.status(200).send("Success");
    }
    else{
      return res.status(400).send("Team Full");
    }
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
    arr.push(await User.findById(id).select("-password -email -role"));
  }
  res.status(200).json({team:team,members: arr});
  }catch(error){
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;