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
        let tournament = await Tournament.findById(id);
        let arr = [];
        for(let i = 0;i<tournament.team.length;i++){
          let d = tournament.team[i].id;
          arr.push(await Team.findById(d))
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
module.exports = router;