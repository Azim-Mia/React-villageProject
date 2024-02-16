const UtmarChar= require('/data/data/com.termux/files/home/villageProject/src/mvc/models/utmarcharModel.js')
const mongoose=require('mongoose');
const {findWithIdService}=require('/data/data/com.termux/files/home/villageProject/service/findWithSingleUserService.js');
const {errorResponse,successResponse}=require('/data/data/com.termux/files/home/villageProject/src/responseHandler/responseHandle.js');
const createError =require('http-errors');
const searchUser=async(req,res,next)=>{
  try{
   const search=req.query.search || "";
   const page=Number(req.query.page) || 1;
   const limit=Number(req.query.limit) || 4;
    const searchRegExp=new RegExp('.*' + search + '.*', 'i');
    const filter={
      isAdmin:{$ne:true},
     $or:[
  {name:{$regex:searchRegExp}},
 //  {email:{$regex:searchRegExp}},
 // {phone:{$regex:searchRegExp}},
        ],
    };
  const options= {password:0, _id:0,email:0};
  const users=await UtmarChar.find(filter,options)
  .limit(limit)
  .skip((page-1) * limit);
  const count= await UtmarChar.find(filter).countDocuments();
 return successResponse(res,{
   statusCode:200,
 message:'user was return successfull',
 payload:{
 users,
   pagination:{
    totalPage:Math.ceil(count/limit),
    correntPage:page,
    previousePage:page-1>0 ? page-1:null,
    nextPage:page+1 < Math.ceil(count/limit) ? page + 1:null,
    },
 },
  });
}catch(error){
  if(error instanceof mongoose.Error){
   next(createError(404,'Invalid search user Id')) 
  }
  next(error);
}
}
module.exports={searchUser}