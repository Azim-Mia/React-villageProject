const createError=require('http-errors');
const mongoose=require('mongoose');

const findWithIdService=async(Model,id, options={})=>{
  try{
    const options={password:0};
  const item= await Model.findById({_id:id},options);
  if(!item){ throw createError(404,`${Model.modelName} not found user match`)};
  return item;
  }catch(error){
    if(error instanceof mongoose.Error){
   throw (createError(404,`${Model.modelName}:Invilaid Id`)) 
    }
    throw error;
  }
};
module.exports= {findWithIdService};