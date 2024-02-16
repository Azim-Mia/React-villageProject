const UtmarChar= require('/data/data/com.termux/files/home/villageProject/src/mvc/models/utmarcharModel.js');
const {errorResponse,successResponse}=require('/data/data/com.termux/files/home/villageProject/src/responseHandler/responseHandle.js');
const createError=require('http-errors');
const deleteUserController=async(req,res,next)=>{
  try{
  const {id}=req.body;
const deletes=await UtmarChar.findOneAndDelete({_id:id});
if(!deletes) {throw createError(409, " data base a kono ai name user nai")};
return successResponse(res,{
    success:true,
    message:"successfull delete",
    payload:{},
  })
  }catch(error){
    next(error)
  }
};
module.exports={deleteUserController}