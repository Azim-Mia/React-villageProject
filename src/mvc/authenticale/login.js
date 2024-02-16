const createErrorr=require("http-errors");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const {makeToken}=require('/data/data/com.termux/files/home/villageProject/src/tokenFile/createToken.js');
const {setAccessTokenCookie,setRefreshTokenCookie,setForgetPasswordCookie}=require('/data/data/com.termux/files/home/villageProject/service/cookie.js');
const {errorResponse,successResponse}=require('/data/data/com.termux/files/home/villageProject/src/responseHandler/responseHandle.js');
const UtmarChar= require('/data/data/com.termux/files/home/villageProject/src/mvc/models/utmarcharModel.js')
const accessTokenKey=process.env.MAKE_TOKEN_KEY;
const refreashTokenKey=process.env.REFREASH_TOKEN_KEY;
const login=async(req,res,next)=>{
 try{
  const {email, password}=req.body;
  const user= await UtmarChar.findOne({email})
  const isPasswordMatch= await bcrypt.compare(password, user.password);
  if(!isPasswordMatch){
    throw (createErrorr("Not password match "));
  }
  if(user.isBanned){
  throw createErrorr(490," user was banned");  
  }
const accessToken= makeToken({email,password}, accessTokenKey, '3mm');
setAccessTokenCookie(res, accessToken)
const refreshToken= makeToken({email,password}, refreashTokenKey, '60m');
setRefreshTokenCookie(res, refreshToken)
const withOutPassword =await user.toObject();
    delete withOutPassword.password;
  successResponse(res,{
    success:true,
    message:accessToken,
    payload:{},
  })
}catch(err){
  next(err);
}
}
module.exports=login;