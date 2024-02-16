const upload = require('/data/data/com.termux/files/home/villageProject/middleware/uploadImage.js');
const homeData=require('/data/data/com.termux/files/home/villageProject/allData/homeData.js');
const {errorResponse,successResponse}=require('/data/data/com.termux/files/home/villageProject/src/responseHandler/responseHandle.js');
//costom module access this page
const {activeUser}=require('/data/data/com.termux/files/home/villageProject/src/mvc/routers/activeUser.js')
const {villageAllRouter}= require('./src/mvc/routers/villageAllRouter.js');
const authRouters=require('/data/data/com.termux/files/home/villageProject/src/mvc/routers/authRouter.js');
const secretRouter=require('/data/data/com.termux/files/home/villageProject/src/mvc/routers/secretRouter.js')
//express require this server active page
const express=require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const morgan=require('morgan');
const cors=require('cors')
const ejs=require('ejs');
const createError = require('http-errors');
//internel module access
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
  origin:["http://localhost:3000"],
  methot:['GET','POST'],
  credentials:true,
}));
app.use(cookieParser())
//app.use(morgan());
app.use(express.static('public'))
app.use(express.static('__dirname'))
app.set('view engine', 'ejs');
//costom router use
app.use('/',villageAllRouter);
app.use('/',authRouters);
app.use('/',secretRouter);
app.use('/', upload.single("image") ,activeUser);
app.get("/", (req,res,next)=>{
  successResponse(res,{
    success:true,
    message:"user is retund",
    payload:{ }
  })
})
app.use((req,res,next)=>{
  next(createError(401, 'Route is not found'))
});
app.use((err,req,res,next)=>{
  res.status(err.status || 500).json({
    success:"false",
    message:err.message,
  });
});

module.exports= app;