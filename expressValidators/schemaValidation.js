const {body} =require('express-validator');
//registation validation
const schemaValidation=[
 body('name')
  .trim()
  .notEmpty()
  .withMessage('Name is require.Enter your name')
  .isLength({min: 3, max:31})
  .withMessage('Name min charater 3 , max charater 31'),
  body('fatherName')
  .trim()
  .notEmpty()
  .withMessage('fatherName is Empty'),
  body('motherName')
  .trim()
  .notEmpty()
  .withMessage('motherName is Empty'),
 body('email')
  .trim()
  .notEmpty()
  .withMessage('Email is something problem. Enter your Email')
  .isLength({max:40})
  .withMessage(' email max charater 40'),
body('password')
  .trim()
  .notEmpty()
  .withMessage('password is required.Enter your valid password')
  .isLength({min:6,max:31})
  .withMessage(' password min charater 6-31 max charater 31'
)
.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]+$/
  )
  .withMessage('password mustbe uppercase lowercase and symble'),
 /* body('phone')
  .trim()
  .notEmpty()
  .withMessage('Phone is required.Enter your phone number')
  .isLength({min: 11, max:13})
  .withMessage('phone number min charater 11, max charater 13')
  .matches(/^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/)
  .withMessage('Valid phone number'),*/
  body('village')
   .trim()
   .notEmpty()
  .withMessage('village is Empty'),
  body('address')
  .trim()
  .notEmpty()
  .withMessage('village is Empty'),
body('image')
/*.custom((value,{req})=>{
  if(!req.file || !req.file.buffer){
 throw  Error("User image is buffer problem required")
 }
  return true;
})*/
.notEmpty()
  .withMessage('image is required not empty'),
  ];
  module.exports={schemaValidation};