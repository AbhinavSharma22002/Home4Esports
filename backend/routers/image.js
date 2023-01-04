const express = require('express');
require('dotenv').config();
const fs  = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const router = express.Router();
const multer = require('multer');
let upload = multer({dest: 'uploads/'});

const {uploadFile,getFileStream} = require('../s3');

router.post("/upload",upload.single('image'),async (req,res)=>{
    const file = req.file;
    const result = await uploadFile(file);
    await unlinkFile(file.path);
    res.status(200).json({val: `${process.env.BASE}/aws/image/${result.Key}`});
    // res.status(200).json({val:'hello world'});
});
router.get("/:key",(req,res)=>{
    const key = req.params.key;
    const readStream = getFileStream(key);
    readStream.pipe(res);
})

module.exports = router;