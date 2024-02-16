const createError=require('http-errors')
const logout=(req,res,next)=>{
  const accessToken=res.clearCookie('accessToken');
const refreshToken=res.clearCookie('refreshToken');
try{
  if(accessToken){
  res.json({
    success:false,
    message:"Not delete cookie",
    cookie:toString(accessToken),
  })  
  }
  }catch(err){
    throw Error(`Error: ${err.message}`)
  }
}
module.exports=logout;