import {useLocation} from 'react-router-dom'
import axios from 'axios';
import {useState} from 'react';
const AddCard=()=>{
  const [customername,setName]=useState("")
  const [address,setAddress]=useState("")
  const [phone,setPhone]=useState("")
  const [present,setPresent]=useState("")
  const location=useLocation()
  const {_id}=location.state
  const users={id:_id,customername:customername,address:address,phone:phone,present:present};
  const handleSubmit =async(event)=>{
    event.preventDefault();
const res= await axios.post("http://localhost:3001/payment",users);
window.location.replace(res.data.url)
  }
  return (<div>
   <p>Payment methot..</p>
   <form onSubmit={handleSubmit}>
   <div>Name:<input type="text" name="customername" onChange={(e)=>{setName(e.target.value)}} /></div>
   <div>Phone No:<input type="number" name="phone" onChange={(e)=>{setPhone(e.target.value)}} /></div>
      <div>Address:<input type="text" name="address" onChange={(e)=>{setAddress(e.target.value)}} /></div>
   <div>present Address:<input type="text" name="present" onChange={(e)=>{setPresent(e.target.value)}}/></div>
   <button type="submit">submit</button>
   </form>
    </div>
    )
};
export default AddCard;