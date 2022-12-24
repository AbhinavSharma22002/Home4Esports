const express = require('express');
const router = express.Router();
const Video= require("../database/Video");
const fetchuser = require('../middleware/Fetchuser');

router.get("/getAll",async(req,res)=>{
    try {
        let videos = await await Video.find({});
        return res.status(200).json({videos});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
      }
});
router.post("/getById",async (req,res)=>{
  try {
      let id = req.body.id;
      let videos = await await Video.findById(id);
      return res.status(200).json({videos});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occurred");
    }
});
router.post("/create",
fetchuser,
async (req, res) => {

    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    //check for access level
  const { title,genre,image,link} = req.body;
  try {
    let video = await Video.create({
        title: title,
        genre: genre,
        image: image,
        link:link
      });
    return res.status(200).send("Success");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});
module.exports = router;