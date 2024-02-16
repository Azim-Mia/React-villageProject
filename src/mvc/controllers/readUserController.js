const UtmarChar= require('/data/data/com.termux/files/home/villageProject/src/mvc/models/utmarcharModel.js')
const {findWithIdService}=require('/data/data/com.termux/files/home/villageProject/service/findWithSingleUserService.js');
const createError=require('http-errors');
const {errorResponse,successResponse}=require('/data/data/com.termux/files/home/villageProject/src/responseHandler/responseHandle.js');
const readUserController=async(req,res,next)=>{
  console.log(req.cookies.accessToken);
  const findAll= await UtmarChar.find();
  if(!findAll){
    throw createError(404, "not found user");
  }
  successResponse(res,{
    success:true,
    message:"return user successfull",
    payload:{findAll},
  })
}
const redSingleUserController=async(req,res,next)=>{
  try{
    const {id}=req.params;
    const option={password:0}
   const findSingle=await findWithIdService(UtmarChar, id, option)
   successResponse(res,{
    success:true,
    message:"return user successfull",
    payload:{findSingle},
  })
  }catch(err){
    next(err);
  }
}
module.exports={readUserController,redSingleUserController};