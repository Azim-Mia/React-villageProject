import React from 'react';
import { NavLink } from "react-router-dom";
import './header.css';
import { FaCartPlus } from "react-icons/fa6";
function Navber(){
  return <div>
  <nav>
  <div><NavLink className="NavlinkDesign" to="/">home</NavLink></div>
  <div><NavLink className="NavlinkDesign" to="/product">product</NavLink></div>
  <div><NavLink className="NavlinkDesign" to="/register">Register</NavLink></div>
    <div><NavLink className="NavlinkDesign" to="/login">Login</NavLink></div>
    <div><NavLink className="NavlinkDesign" to="/logout">LogOut</NavLink></div>
      <div><NavLink className="NavlinkDesign" to="/info">Information</NavLink></div>
       <div><NavLink className="" to="/card"><FaCartPlus   className="text-blue-400 hover:bg-yellow-300 paymentcard"/></NavLink></div>
</nav>
  </div>
}
export default Navber;