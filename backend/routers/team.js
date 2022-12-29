const express = require('express');
const router = express.Router();
const Tournament= require("../database/Tournament");
const Team= require("../database/Team");
const User = require("../database/User");
const fetchuser = require('../middleware/Fetchuser');

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
        return res.status(200).send("Success");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});

router.post("/newMember",
fetchuser,
async (req, res) => {
    let userId = req.user.id;
    let team_id = req.body.id;
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
  let team = await Team.findById(req.body.id)
  team.clicked += 1;
  try{
  await Team.findOneAndUpdate({_id: team._id}, team);
  res.status(200).json({item:team});
  }catch(error){
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});
module.exports = router;