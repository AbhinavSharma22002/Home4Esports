const express = require('express');
const router = express.Router();
const Product= require("../database/Product");
const fetchuser = require('../middleware/Fetchuser');

router.get("/getAll",async(req,res)=>{
    try {
        let products = await await Product.find({});
        return res.status(200).send(products);
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
  const { title,price,size,image,description} = req.body;
  try {
    let Product = await Product.create({
        title: title,
        price: price,
        size: size,
        description: description,
        image: image,
        author: {
            id: user._id
        }
      });
    return res.status(200).send("Success");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});
module.exports = router;