import React from 'react';
import { NavLink } from "react-router-dom";
import './header.css';
function Navber(){
  return <div>
  <nav>
  <div><NavLink className="NavlinkDesign" to="/">home</NavLink></div>
  <div>
  <NavLink className="NavlinkDesign" to="/register">Register</NavLink></div>
    <div><NavLink className="NavlinkDesign" to="/login">Login</NavLink></div>
    <div><NavLink className="NavlinkDesign" to="/logout">LogOut</NavLink></div>
    <div><NavLink className="NavlinkDesign" to="/card">Card</NavLink></div>
      <div><NavLink className="NavlinkDesign" to="/info">Information</NavLink></div>
</nav>
  </div>
}
export default Navber;