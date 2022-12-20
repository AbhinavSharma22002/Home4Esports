const express = require('express');
const router = express.Router();
const multer = require('multer');
let upload = multer({dest: 'uploads/'});

router.post("/upload",upload.single('image'),(req,res)=>{
    res.status(200).send("HELLO world");
});

module.exports = router;