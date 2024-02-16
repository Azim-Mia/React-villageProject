const setAccessTokenCookie=(res, accessToken)=>{
  res.cookie('accessToken',accessToken,{
    maxAge:2*60*1000,
    httpOnly:true,
    secure:true,
   sameSide:'none',
    date:new Date(),
  })
};
const setRefreshTokenCookie=(res, refreshToken)=>{
  res.cookie("refreshToken",refreshToken,{
    maxAge:7*24*60*60*1000,
    httpOnly:true,
    sameSide:'none',
    secure:true,
  date:new Date(),
  });
  
}
const setForgetPasswordCookie=(res, forgetPasswordToken)=>{
  res.cookie('forgetPassword',forgetPasswordToken,{
    maxAge:15*60*1000,
    httpOnly:true,
    secure:true,
   sameSide:'none',
    date:new Date(),
  });
}
module.exports={setAccessTokenCookie,setRefreshTokenCookie,setForgetPasswordCookie};
