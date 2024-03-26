import React from 'react';
import Aside from '/data/data/com.termux/files/home/React-villageProject/src/sidePage/aside.jsx';
import './home.css';
const Home=()=>{
  return <div className='home_container md:w-full text-md lg:w-full text-lg '>
  <div className="flex-1">hello Product
  </div>
  <div className="flex-3"><Aside /></div>
  </div>
}
export default Home;
