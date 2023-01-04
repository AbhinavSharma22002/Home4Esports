const jwt = require('jsonwebtoken');
const JWT_secret = process.env.JWT_secret;
require('dotenv').config();
const Fetchuser = (req,res,next)=>{
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send("Some Error Occured");
    }
    try{
        const data = jwt.verify(token,JWT_secret);
        req.user = data.user;    
        next();
    }
    catch(error){
        res.status(401).send("Some Error Occured");
    }
};

module.exports = Fetchuser;