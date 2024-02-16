const jwt = require('jsonwebtoken');
const makeToken=(payload, key, {expiresIn})=>{
  var token=jwt.sign(payload,key , expiresIn);
  return token;
}
module.exports= {makeToken}