const bcrypt=require('bcryptjs');
const {Schema, model}=require('mongoose');
const schema= new Schema({
  name:{
    type:String,
    trim:true,
    required:[true, "please enter your name"],
  },
  fatherName:{
    type:String,
    trim:true,
    required:[true, "please enter your Father name"],
  },
  motherName:{
    type:String,
    trim:true,
    required:[true, "please enter your Mother name"],
  },
  nid:{
    type:Number,
    trim:true,
    default:{nid:"null"}
  },
  birthId:{
type:String,
trim:true,
default:{birth:"null"}
  },
    email:{
 type:String,
  required:[true, "enter your email"] 
  },
  password:{
   type:String, 
   required:[true, 'no empty Password'],
  set:(v)=>bcrypt.hashSync(v,bcrypt.genSaltSync(10)),
  },
 postCode:{
    type:Number,
    trim:true,
    required:[true, "enter your postCode"]
  },
  village:{
   type:String,
    trim:true, 
    required:[true, "please enter your vallage name"],
    description:[
      {
      default:null,
      area:String,
      name:String,
      text:String,
      },
    ],
  },
  address:{
 type:String,
    trim:true,  
    required:[true, "please enter your real address"]
  },
  image:{
    type:String,
    required:[true,"enter your image"]
  },
  isBanned:{
    type:Boolean,
    default:false,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
},{timestamps:true});
const UtmarChar= new model('villageUtmarchar', schema);
module.exports= UtmarChar;
