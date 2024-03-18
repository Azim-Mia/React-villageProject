import React from 'react';
//import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Style from './header.module.css';
import Navber from '/data/data/com.termux/files/home/React-villageProject/src/header/linkAllPage.js';
import Error from '/data/data/com.termux/files/home/React-villageProject/src/errorpage.js';
import Home from '/data/data/com.termux/files/home/React-villageProject/src/home/home.js'
import Info from '/data/data/com.termux/files/home/React-villageProject/src/info/info.js'
import Register from '/data/data/com.termux/files/home/React-villageProject/src/register/register.js'
import Active from './activeUser.js';
import Login from './login.js';
import Logout from '/data/data/com.termux/files/home/React-villageProject/src/logOutPage/logout.jsx';
import Card from '/data/data/com.termux/files/home/React-villageProject/src/cardPage/card.js';
// npm install react-icons --save
// tarpor import
import { FaBars } from "react-icons/fa";
const Header=()=>{
  return (
    <div className={Style.header}>
<ul>
<div className={Style.bars}>
<div className={Style.barsIconContainer}>
<p className={Style.barsIcon}><FaBars /></p>
<b className={Style.textUtmarChar}>উৎমারচর গ্রামের পরিচয়...</b>
</div>
<div className={Style.drop_list}>
<li>Noyapara</li>
<li>vatipara</li>
<li>golipara</li>
</div>
</div>
</ul>
<div>
<BrowserRouter>
<div className={Style.router}><Navber /></div>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/logout" element={<Logout />} />
<Route path="/card" element={<Card />} />
<Route path="/info" element={<Info />} />
<Route path="/active/:token" element={<Active />} />
<Route path="/*" element={<Error />} />
</Routes>
</BrowserRouter>
  </div>
  </div>
  );
}
export default Header;