import React,{useState} from 'react';
//import { v4 as uuidv4 } from 'uuid';
import Pagetitle from '/data/data/com.termux/files/home/React-villageProject/src/otherComponent/pageTitle.jsx';
import '/data/data/com.termux/files/home/React-villageProject/src/tailwind.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Style from './register.module.css'
const Register=()=>{
  const navigate=useNavigate()
  const [name, setName]=useState("")
  const [fatherName, setFatherName]=useState('')
  const [motherName,setMotherName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [nid, setNid]=useState('')
  const [birthId, setBirthId]=useState('')
 const [village, setVillage]=useState('')
  const [postCode,setPostCode]=useState('');
  const [address, setAddress]=useState('')
 const [images,setImage]=useState(null)
 const image='/data/data/com.termux/files/home/storage/dcim/Camera/'+images?.slice(12);
const user= {name:name,fatherName:fatherName,motherName:motherName,email:email,password:password,address:address,postCode:postCode,village:village,image:{url:image},nid:nid,birthId:birthId};
  const handleSubmit=async(e)=>{
 try{
 axios.defaults.withCredentials=true;
   e.preventDefault();
  const res=  await axios.post("http://localhost:3001/create",user);
  const ok=res.data.success
  if(ok){
  alert(res.data.message + " Chack your Email")
  navigate('/login')
  return;
  }else{
    alert(res.data.message)
  }
   }catch(err){
     alert(err)
   }
  }
  return <div className={Style.container}>
  <Pagetitle title="Register page" />
<form onSubmit={handleSubmit} className={Style.forms} enctype="multipart/form-data">
  <h1 className={Style.titleH1}>Register now</h1>
<div>
<lable for id="name" className={Style.lable}>Name:</lable>
<input className={Style.input_form} type="text" id="name" name="name" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} />
</div>
<div>
<lable for id="fatherName" className={Style.lable}>Father Name:</lable>
<input className={Style.input_form} type="text" id="fatherName" name="fatherName" placeholder="Enter your Father Name" onChange={(e)=>setFatherName(e.target.value)} />
</div>
<div>
<lable for id="motherName" className={Style.lable}>MotherName:</lable>
<input className={Style.input_form} type="text" id="motherName" name="motherName" placeholder="Enter your Name" onChange={(e)=>setMotherName(e.target.value)} />
</div>
<div>
<lable for id="nid" className={Style.lable}>NID:</lable>
<input className={Style.input_form} type="text" id="nid" name="nid" placeholder="Enter your Name" onChange={(e)=>setNid(e.target.value)}/>
</div>
<div>
<lable for id="dateOfBirth" className={Style.lable}>Date Of Birth ID:</lable>
<input className={Style.input_form} type="Number" name="birthId" placeholder="Enter your Date Of Birth" onChange={(e)=>setBirthId(e.target.value)}/>
</div>
<div>
<lable for id="email" className={Style.lable}>Email:</lable>
<input className={Style.input_form} type="Email" name="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div>
<lable for id="password" className={Style.lable}>Password:</lable>
<input className={Style.input_form} type="text" name="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
</div>
<div>
<lable for id="post" className={Style.lable}>Post Code:</lable>
<input className={Style.input_form} type="Number" name="postCode" placeholder="Enter your post code" onChange={(e)=>setPostCode(e.target.value)}/>
</div>
<div>
<lable for id="village" className={Style.lable}>Village:</lable>
<input className={Style.input_form} type="text" name="village" placeholder="Enter your village" onChange={(e)=>setVillage(e.target.value)}/>
</div>
<div>
<lable for id="address" className={Style.lable}>Address:</lable>
<input className={Style.input_form} type="text" name="address" placeholder="Enter your Address" onChange={(e)=>setAddress(e.target.value)}/>
</div>
<div>
<lable for id="image" className={Style.lable}>Image:</lable>
<input className={Style.input_form} type="file" name="image" placeholder="Enter your password" onChange={(e)=>setImage(e.target.value)}/>
</div>
<div><button className="btn" type="submit">Submit</button></div>
</form>
  </div>
}
export default Register;
