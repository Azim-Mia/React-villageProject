import React from 'react';
//import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './header.css';
import Navber from '/data/data/com.termux/files/home/React-villageProject/src/header/linkAllPage.js';
import Error from '/data/data/com.termux/files/home/React-villageProject/src/otherComponent/errorpage.js';
import Footer from '/data/data/com.termux/files/home/React-villageProject/src/footerPage/footer.jsx';
import '/data/data/com.termux/files/home/React-villageProject/src/footerPage/footer.css';
import Home from '/data/data/com.termux/files/home/React-villageProject/src/home/home.js'
import Info from '/data/data/com.termux/files/home/React-villageProject/src/info/info.js'
import Register from '/data/data/com.termux/files/home/React-villageProject/src/register/register.js'
import Profile from '/data/data/com.termux/files/home/React-villageProject/src/profile/profile.jsx';
import Setting from '/data/data/com.termux/files/home/React-villageProject/src/profile/setting.jsx';
import Active from './activeUser.js';
import Login from './login.js';
import Logout from '/data/data/com.termux/files/home/React-villageProject/src/logOutPage/logout.jsx';
import Card from '/data/data/com.termux/files/home/React-villageProject/src/cardPage/card.js';
import Product from '/data/data/com.termux/files/home/React-villageProject/src/productPage/product.jsx';
// npm install react-icons --save
// tarpor import
import { FaBars } from "react-icons/fa";
const Header=()=>{
  return (
    <div className="md:text-md header bg-blue-200">
 <div className="upernavcontainer">
    <div className="bars">
    <p className="barsIcon"><FaBars /></p>
    <div className="drop_list">
<li>Noyapara</li>
<li>vatipara</li>
<li>golipara</li>
</div>
    </div>
  <div className="textUtmarChar"><b>উৎমারচর গ্রামের পরিচয়...</b></div>  
   <div className="img_profile"><Profile /></div> 
  </div> 
  <div>
<BrowserRouter>
<div className="router"><Navber /></div>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/logout" element={<Logout />} />
<Route path="/card" element={<Card />} />
<Route path="/info" element={<Info />} />
<Route path="/profile" element={<Setting />} />
<Route path="/active/:token" element={<Active />} />
<Route path="/product" element={<Product />} />
<Route path="/*" element={<Error />} />
</Routes>
<div className="main"></div>
<div className='footer'><Footer /></div>
</BrowserRouter>
  </div>
  </div>
  );
}
export default Header;