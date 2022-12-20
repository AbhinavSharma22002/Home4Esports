const express = require('express');
const router = express.Router();
const Letter = require("../database/NewsLetter");
const { body, validationResult } = require("express-validator");
router.post("/",
[
  body("email", "Enter a valid email").isEmail(),
  body("name", "Enter a valid name").isLength({ min: 5 }),
],
async (req, res) => {
  //If there are errors, return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, name } = req.body;

  try {
    let letter = await Letter.create({
        name: name,
        email: email
      });

    return res.status(200).send("Success");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});
module.exports = router;