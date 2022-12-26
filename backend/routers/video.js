const User = require("../database/User");
const express = require('express');
const router = express.Router();
const Video= require("../database/Video");
const fetchuser = require('../middleware/Fetchuser');

router.get("/getAll",async(req,res)=>{
    try {
        let video = await Video.find({});
        return res.status(200).send(video);
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
  const { videoTitle,videoGenre,link,image} = req.body;
 
  try {
    let video = await Video.create({
        title: videoTitle,
        genre: videoGenre,
        link: link,
        image: image,
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