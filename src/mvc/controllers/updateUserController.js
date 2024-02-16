const UtmarChar= require('//data/data/com.termux/files/home/villageProject/src/mvc/models/utmarcharModel.js');
const {findWithIdService}=require('/data/data/com.termux/files/home/villageProject/service/findWithSingleUserService.js');
const {errorResponse,successResponse}=require('/data/data/com.termux/files/home/villageProject/src/responseHandler/responseHandle.js');
const createError =require('http-errors');
const updateUserController=async(req,res,next)=>{
const {name, fatherName, motherName}=req.body;
try{
   const userId=req.params.id;
 const options={};
// onst matchId=await User.findOne({_id:userId});
   await findWithIdService(UtmarChar,userId,options);
   const updateOptions= { new:true, runValidators:true, context:'query'};
   let updates={};
  for(let key in req.body){
    if(['name', 'fatherName', 'motherName'].includes(key)){
      updates[key]=req.body[key];
    }
  }
 const updatesNewUsers=await UtmarChar.findByIdAndUpdate(userId,updates, updateOptions)
  if(!updatesNewUsers){
   throw createError("not update")
  };
    return successResponse(res,{
      statusCode:201,
      success:true,
     message:"successfull",
     payload:{updatesNewUsers},
   })
  }catch(error){
  console.error('Error:', error.message)  
  }
}
module.exports={updateUserController}