const express = require('express');
const router = express.Router();
const Blog= require("../database/Blog");
const User = require("../database/User")
const fetchuser = require('../middleware/Fetchuser');

router.get("/getAll",async(req,res)=>{
    try {
        let blogs = await await Blog.find({});
        return res.status(200).json({blogs});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
      }
});
router.post("/getById",async (req,res)=>{
  try {
      let id = req.body.id;
      let blogs = await await Blog.findById(id);
      return res.status(200).json({blogs});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
});
router.post("/create",
fetchuser,
async (req, res) => {

    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    //check for access level
  const { title,image,body} = req.body;
  for(let i=0;i<image.length;i++){
    body.replace(`{Image}`,image[i].link);
  }
  try {
    let blog = await Blog.create({
        title: title,
        image: image,
        body: body,
        author: {
            id: user._id,
            username: (user.fname+user.lname)
        },
        comments: []
      });
    return res.status(200).send("Success");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});
module.exports = router;