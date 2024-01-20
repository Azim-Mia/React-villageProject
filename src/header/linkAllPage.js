import React from 'react';
import { NavLink } from "react-router-dom";
import Style from './header.module.css';
function Navber(){
  return <div>
  <nav>
  <div><NavLink className={Style.NavlinkDesign} to="/">home</NavLink></div>
  <div>
  <NavLink className={Style.NavlinkDesign} to="/register">Register</NavLink></div>
    <div><NavLink className={Style.NavlinkDesign} to="/login">Login</NavLink></div>
      <div><NavLink className={Style.NavlinkDesign} to="/info">Information</NavLink></div>
</nav>
  </div>
}
export default Navber;