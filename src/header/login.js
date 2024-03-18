import React,{useState}  from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
const Login=()=>{
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const formHandle=async(e)=>{
    try{
   e.preventDefault();
   axios.defaults.withCredentials=true;
   const res= await axios.post('http://localhost:3001/login',{email,password})
   if(res.data.success){
     navigate('/info');
   }else{
     alert("password or email not match. Try again");
   }
   }catch(error){
     alert(error.message)
   }
  }
  return <>
  <form onSubmit={formHandle}>
  <div>Email:<input type="email" name="email" placeholder="Inter your Email" onChange={(e)=>setEmail(e.target.value)} required="empty" /></div>
   <div>Password:<input type="password" name="passsword" placeholder="Enter Your User Password" onChange={(e)=>setPassword(e.target.value)} required ="empty" /></div>
    <div><button type="submit">sign In</button></div>
  </form>
  </>
}
export default Login