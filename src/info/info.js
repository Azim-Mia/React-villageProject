
import React,{useEffect,useState}from 'react';
import axios from 'axios';
import './info.css';
const Info=()=>{
  const [datas, setDatas]=useState(null);
  //axios.defaults.withCredentials=true;
  useEffect(()=>{
     axios.get('http://localhost:3001/read',{withCredentials:true})
    .then((res)=>{
      //payload return user useState parse data 
    const result=res.data.payload
    //alert(res.data.message)
    setDatas(result);
    })
    .catch(err => alert(err.message))
  })
  return <>
{datas?.findAll.map((todo)=>{
    const {id, name,fatherName, motherName,address, image}=todo;
    return <article key={id} className="info_container">
    <img src={image} alt="photos" />
     <p>Name:{name}</p>
    <p>Father_Name:{fatherName}</p>
      <p>Mother_name:{motherName}</p>
      <p>Address:{address}</p>
    </article>
  })}
  </>
}
export default Info;