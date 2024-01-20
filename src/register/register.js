import React from 'react';
import Style from './register.module.css'
const Register=()=>{
  return <div className={Style.container}>
<form action="" methot="">
  <h1 className={Style.h1}>Register now</h1>
<div>
<lable for id="name" className={Style.lable}>Name:</lable>
<input className={Style.input} type="text" id="name" name="name" placeholder="Enter your Name"/>
</div>
<div>
<lable for id="fatherName" className={Style.lable}>Father Name:</lable>
<input className={Style.input} type="text" id="fatherName" name="fatherName" placeholder="Enter your Father Name"/>
</div>
<div>
<lable for id="matherName" className={Style.lable}>MatherName:</lable>
<input className={Style.input} type="text" id="matherName" name="matherName" placeholder="Enter your Name"/>
</div>
<div>
<lable for id="nid" className={Style.lable}>NID:</lable>
<input className={Style.input} type="text" id="nid" name="nid" placeholder="Enter your Name"/>
</div>
<div>
<lable for id="dateOfBirth" className={Style.lable}>Date Of Birth ID:</lable>
<input className={Style.input} type="Number" name="DateId" placeholder="Enter your Date Of Birth"/>
</div>
<div>
<lable for id="email" className={Style.lable}>Email:</lable>
<input className={Style.input} type="Email" name="email" placeholder="Enter your Email"/>
</div>
<div>
<lable for id="pasdword" className={Style.lable}>Password:</lable>
<input className={Style.input} type="text" name="password" placeholder="Enter your password"/>
</div>
<div>
<lable for id="post" className={Style.lable}>Post Code:</lable>
<input className={Style.input} type="Number" name="postCode" placeholder="Enter your post code"/>
</div>
<div>
<lable for id="village" className={Style.lable}>Village:</lable>
<input className={Style.input} type="text" name="village" placeholder="Enter your village"/>
</div>
<div>
<lable for id="address" className={Style.lable}>Address:</lable>
<input className={Style.input} type="text" name="address" placeholder="Enter your Address"/>
</div>
<div>
<lable for id="image" className={Style.lable}>Image:</lable>
<input className={Style.input} type="file" name="image" placeholder="Enter your password"/>
</div>
<div><button className={Style.btn} type="submit">Submit</button></div>
</form>
  </div>
}
export default Register;
