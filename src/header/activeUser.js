import {useParams} from 'react-router-dom';
import axios from 'axios';
const Active=()=>{
  let { token} = useParams()
  //const navigate=useNavigate()
  const sliceToken=token.slice(1)
const user={token:sliceToken}
 const handleSubmit=async(e)=>{
 try{
 axios.defaults.withCredentials=true;
   e.preventDefault();
   const res=  await axios.post("http://localhost:3001/active",user);
  alert(res.data.message);
   }catch(err){
     alert(err.message)
   }
  }
  return <>
  <form onSubmit={handleSubmit}>
  <button type="submit" className="bg-blue-300 px-2 hover:bg-yellow-400">azim</button>
  </form>
  </>
}
export default Active;