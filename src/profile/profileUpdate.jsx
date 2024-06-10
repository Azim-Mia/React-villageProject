import './profile.css'
import axios from 'axios';
import {useState} from 'react';
const Profileupdate=()=>{
  const [name,setName] =useState('');
  const [images,setImage] =useState('');
const url= "http://localhost:3001/update_profile";
const image='/data/data/com.termux/files/home/storage/dcim/Camera/'+images?.slice(12);
const user ={name:name,image:{url:image}};
  const handleSubmit=()=>{
   try{
     const makeRequest=async(url)=>{
     axios.defaults.withCredentials=true;
    const res=await axios.put(url,user);
     alert("sucessfull",res);   
     }
     makeRequest(url);
  }catch(error){
   alert(error.message); 
  } 
  };
  return <div>
  <form onSubmit={handleSubmit}>
  <input type="text" name="name" placeholder="update Name" onChange={(e)=>setName(e.target.value)} />
    <input type="file" name="image" placeholder="update image" onChange={(e)=>setImage(e.target.value)} />
  <button type="submit">Update Now</button>
  </form>
  </div>
}
export default Profileupdate