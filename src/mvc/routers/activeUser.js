const cloudinary = require('/data/data/com.termux/files/home/villageProject/config/cloudinary.js')
const UtmarChar= require('/data/data/com.termux/files/home/villageProject/src/mvc/models/utmarcharModel.js')
const jwt = require('jsonwebtoken');
const createError=require('http-errors');
const express=require('express');
require('dotenv').config();
const tokenKey=process.env.SIGNINJWTKEY || 'hffkjjk';
const fh='jdhfjdjddjhjd';
const activeUser=express.Router();
activeUser.post('/active/user', async(req,res,next)=>{
  const {token}=req.body;
  const decoded= jwt.verify(token,tokenKey);
 const image=decoded.image;
 if(!image){
   res.send("not image")
 }
  cloudinary.uploader
.upload(image, 
  { public_id: "image_id" })
.then(result=>console.log(result));
  const success= await UtmarChar.create(decoded);
  res.send(success);
})
module.exports={activeUser};