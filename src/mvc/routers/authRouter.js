const login= require("/data/data/com.termux/files/home/villageProject/src/mvc/authenticale/login.js");
const {isLoginMiddleware}=require('/data/data/com.termux/files/home/villageProject/middleware/isLogedin.js')
const logout=require('/data/data/com.termux/files/home/villageProject/src/mvc/authenticale/logout.js')
const express=require('express');
const authRouters=express.Router();
authRouters.post('/login',login);
authRouters.post('/logout', logout);
module.exports= authRouters;