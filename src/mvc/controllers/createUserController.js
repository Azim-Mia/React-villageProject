require('dotenv').config();
const jwt = require('jsonwebtoken');
const UtmarChar= require('/data/data/com.termux/files/home/villageProject/src/mvc/models/utmarcharModel.js')
//make token function require
const {makeToken}=require('/data/data/com.termux/files/home/villageProject/src/tokenFile/createToken.js');
const emailWithNodeMailer=require('/data/data/com.termux/files/home/villageProject/src/emailSenderFile/sendEmailProcess.js')
//jsonwebtoken from .env file;
const createUserTokenKey=process.env.SIGNINJWTKEY || 'hffkjjk';
const createError=require('http-errors');
const {errorResponse,successResponse}=require('/data/data/com.termux/files/home/villageProject/src/responseHandler/responseHandle.js');
const createUserController=async(req,res,next)=>{
  try{
  const {name, fatherName, motherName, nid, birthId, email, password, postCode
    , village, address, image
  }=req.body;
  const findEmail=await UtmarChar.findOne({email:email});
  const findNid=await UtmarChar.findOne({nid:nid});
  const findBirth=await UtmarChar.findOne({birthId:birthId});
  if(findEmail || findNid || findBirth){
  res.send("User is exsits here")
  }
  const createUser =await UtmarChar({name:name, fatherName:fatherName, motherName:motherName, nid:nid, birthId:birthId, email:email, password:password, postCode:postCode, village:village, address:address, image:image})
 const token=makeToken({name,fatherName,motherName,nid,birthId,email,password,postCode,village,address,image}, createUserTokenKey, '3m');
//response token this page
//res.send()
const emailData={
  email,
  subject:'Active Account Email',
  html:`<h2>Hello User</h2>
  <div>Verify your email</div><div><a href="http://localhost:3000/active/:${token}" target="_blank ">Active Account now</a></div>
  `
};
emailWithNodeMailer(emailData);

return successResponse(res,{
 success:true,
 message:`please go to your ${email} compleate your process`,
payload:{token},
});
  }catch(error){
    next(createError(`Error:sum:${error.message}`));
  }
}
module.exports={createUserController};