import React,{useState} from 'react';
import axios from 'axios';
import Style from './register.module.css'
const Register=()=>{
  const [name, setName]=useState("djkdjdjd")
  const [fatherName, setFatherName]=useState('')
  const [motherName,setMotherName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [nid, setNid]=useState('')
  const [birthId, setBirthId]=useState('')
 const [village, setVillage]=useState('')
  const [postCode,setPostCode]=useState('');
  const [address, setAddress]=useState('')
 const [image,setImage]=useState('')
const user= {name:name,fatherName:fatherName,motherName:motherName,email:email,password:password,address:address,postCode:postCode,village:village,image:image,nid:nid,birthId:birthId};
  const handleSubmit=(e)=>{
   axios.defaults.withCredentials=true;
    e.preventDefault();
    alert(user.image)
  }
  return <div className={Style.container}>
<form onSubmit={handleSubmit}>
  <h1 className={Style.h1}>Register now</h1>
<div>
<lable for id="name" className={Style.lable}>Name:</lable>
<input className={Style.input} type="text" id="name" name="name" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} />
</div>
<div>
<lable for id="fatherName" className={Style.lable}>Father Name:</lable>
<input className={Style.input} type="text" id="fatherName" name="fatherName" placeholder="Enter your Father Name" onChange={(e)=>setFatherName(e.target.value)} />
</div>
<div>
<lable for id="motherName" className={Style.lable}>MotherName:</lable>
<input className={Style.input} type="text" id="motherName" name="motherName" placeholder="Enter your Name" onChange={(e)=>setMotherName(e.target.value)} />
</div>
<div>
<lable for id="nid" className={Style.lable}>NID:</lable>
<input className={Style.input} type="text" id="nid" name="nid" placeholder="Enter your Name" onChange={(e)=>setNid(e.target.value)}/>
</div>
<div>
<lable for id="dateOfBirth" className={Style.lable}>Date Of Birth ID:</lable>
<input className={Style.input} type="Number" name="birthId" placeholder="Enter your Date Of Birth" onChange={(e)=>setBirthId(e.target.value)}/>
</div>
<div>
<lable for id="email" className={Style.lable}>Email:</lable>
<input className={Style.input} type="Email" name="email" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div>
<lable for id="password" className={Style.lable}>Password:</lable>
<input className={Style.input} type="text" name="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
</div>
<div>
<lable for id="post" className={Style.lable}>Post Code:</lable>
<input className={Style.input} type="Number" name="postCode" placeholder="Enter your post code" onChange={(e)=>setPostCode(e.target.value)}/>
</div>
<div>
<lable for id="village" className={Style.lable}>Village:</lable>
<input className={Style.input} type="text" name="village" placeholder="Enter your village" onChange={(e)=>setVillage(e.target.value)}/>
</div>
<div>
<lable for id="address" className={Style.lable}>Address:</lable>
<input className={Style.input} type="text" name="address" placeholder="Enter your Address" onChange={(e)=>setAddress(e.target.value)}/>
</div>
<div>
<lable for id="image" className={Style.lable}>Image:</lable>
<input className={Style.input} type="file" name="image" placeholder="Enter your password" onChange={(e)=>setImage(e.target.value)}/>
</div>
<div><button className={Style.btn} type="submit">Submit</button></div>
</form>
  </div>
}
export default Register;
