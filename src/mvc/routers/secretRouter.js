const {infoAllinformation}=require('/data/data/com.termux/files/home/villageProject/src/mvc/controllers/secretPageControllers/infoController.js')
const {isLoginMiddleware}=require('/data/data/com.termux/files/home/villageProject/middleware/isLogedin.js')
const express=require('express');
const secretRouter=express.Router();
secretRouter.get('/allinfo',isLoginMiddleware,infoAllinformation);
module.exports=secretRouter;