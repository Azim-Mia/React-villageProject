require('dotenv').config();
const createError= require('http-errors');
const jwt = require('jsonwebtoken');

const accessTokenKey=process.env.MAKE_TOKEN_KEY;
const refreashTokenKey=process.env.REFREASH_TOKEN_KEY;
const isLoginMiddleware=(req,res,next)=>{
  const accesstoken=req.cookies.accessToken;
if(!accesstoken){
if(newToken(req,res)){
  next();
}
}else{
  jwt.verify(accesstoken,accessTokenKey,(err,decoded)=>{
    if(err){
      return res.json({success:false,message:"User Cookies undefind"})
    }else{
      req.email=decoded.email;
      next()
    }
  })
}
}
const newToken=(req,res,next)=>{
  let exist=false;
  const refreshtoken=req.cookies.refreshToken;
if(!refreshtoken){
  res.json({success:false, message:"please login now"})
}else{
  jwt.verify(refreshtoken,refreashTokenKey,(err,decoded)=>{
    if(err){
      return res.json({success:false,message:"User Cookies undefind"})
    }else{
   const accesstoken=jwt.sign({email:decoded.email},accessTokenKey,{expiresIn:'1m'})
   res.cookie('accessToken',accesstoken,{maxAge:6000});
   exist=true;
    }
  })
}
return exist;
}

module.exports={isLoginMiddleware};