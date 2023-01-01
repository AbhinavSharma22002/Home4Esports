const jwt = require('jsonwebtoken');
const JWT_secret = process.env.JWT_secret;

const Fetchuser = (req,res,next)=>{
    //Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.redirect( process.env.FRONT+ "/login")
    }
    try{
        const data = jwt.verify(token,JWT_secret);
        req.user = data.user;    
        next();
    }
    catch(error){
        res.redirect( process.env.FRONT + "/login")
    }
};

module.exports = Fetchuser;