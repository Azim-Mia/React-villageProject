const {searchUser}=require('/data/data/com.termux/files/home/villageProject/searchUser/search.js');
const upload = require('/data/data/com.termux/files/home/villageProject/middleware/uploadImage.js');
const {schemaValidation}=require('/data/data/com.termux/files/home/villageProject/expressValidators/schemaValidation.js')
const {runValidation}=require('/data/data/com.termux/files/home/villageProject/expressValidators/index.js');
const {updateUserController}=require('/data/data/com.termux/files/home/villageProject/src/mvc/controllers/updateUserController.js');
const {createUserController}=require('/data/data/com.termux/files/home/villageProject/src/mvc/controllers/createUserController.js');
const {readUserController,redSingleUserController}=require('/data/data/com.termux/files/home/villageProject/src/mvc/controllers/readUserController');
const {deleteUserController}=require('/data/data/com.termux/files/home/villageProject/src/mvc/controllers/deleteUserController.js');
const express=require('express');
const villageAllRouter=express.Router();
villageAllRouter.post('/create',schemaValidation,runValidation,createUserController)
villageAllRouter.get('/read',readUserController)
villageAllRouter.get('/readSingle/:id',redSingleUserController);
villageAllRouter.put('/update/:id',upload.single("image"),updateUserController)
villageAllRouter.delete('/delete',deleteUserController)
villageAllRouter.get('/userFind',searchUser);
module.exports= {villageAllRouter}