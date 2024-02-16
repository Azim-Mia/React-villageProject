const UtmarChar= require('/data/data/com.termux/files/home/villageProject/src/mvc/models/utmarcharModel.js')
const {isLoginMiddleware}=require('/data/data/com.termux/files/home/villageProject/middleware/isLogedin.js')
const {errorResponse,successResponse}=require('/data/data/com.termux/files/home/villageProject/src/responseHandler/responseHandle.js');
const createError=require('http-errors');
const infoAllinformation=async(req,res,next)=>{
  const allInfo=await UtmarChar.find();
  successResponse(res,{
    success:true,
    message:'All User return seccessfull',
    payload:{allInfo}
  })
}
module.exports={infoAllinformation};