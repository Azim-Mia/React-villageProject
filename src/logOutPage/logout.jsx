import {useNavigate} from 'react-router-dom'
import Pagetitle from '/data/data/com.termux/files/home/React-villageProject/src/otherComponent/pageTitle.jsx';
import axios from 'axios';
const Logout=()=>{
  const navigate=useNavigate()
  const formHandle=async(e)=>{
    try{
   e.preventDefault();
   axios.defaults.withCredentials=true;
   const res= await axios.post('http://localhost:3001/logout')
   if(res.data.success){
     alert("Successfull Logout..")
    navigate('/login')
   }else{
    navigate('/info');
   }
   }catch(error){
     alert(error.message)
   }
  }
  return <>
  <Pagetitle title="Logout page" />
  <form onSubmit={formHandle}>
  <div><button type="submit">logout</button></div>
  </form>
  </>
}
export default Logout