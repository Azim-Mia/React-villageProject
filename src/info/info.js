import {useNavigate} from 'react-router-dom'
import Pagetitle from '/data/data/com.termux/files/home/React-villageProject/src/otherComponent/pageTitle.jsx';
import React,{useEffect,useState}from 'react';
import axios from 'axios';
import './info.css';
const Info=()=>{
  const navigate=useNavigate()
  const [datas, setDatas]=useState(null);
  //axios.defaults.withCredentials=true;
  useEffect(()=>{
     axios.get('http://localhost:3001/read',{withCredentials:true})
    .then((res)=>{
      //payload return user useState parse data 
    const result=res.data.payload

    if(!res.data.success){
     navigate('/login');
    }else{
    setDatas(result);
    }
    }).catch(err => alert(err.message))
  })
  return <div className="info_container">
  <Pagetitle title="Village page" />
{datas?.findAll.map((todo)=>{
    const {_id, name,fatherName, motherName,address, image,isAdmin}=todo;
    return <article key={_id} className="info_article">
    <div className=""><img src={image} alt="photos" className="sm:w-full min:w-full md:w-full lg:w-full"/>
     <p className="bg-yellow-500 md:text-2xl">Name:{name}</p>
    <p className="md:text-2xl">Father_Name:{fatherName}</p>
      <p className="md:text-2xl">Mother_name:{motherName}</p>
      <p className="md:text-2xl">Address:{address}</p>
      <p className="md:text-2xl">ID:{_id}</p>
            <p className="md:text-2xl">isAdmin:{isAdmin}</p>
      </div>
    </article>
  })}
  </div>
}
export default Info;