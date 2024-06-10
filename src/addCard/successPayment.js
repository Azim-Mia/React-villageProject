import {useParams} from 'react-router-dom';
const SuccessPayment=()=>{
  const {tranId}=useParams()
  return <div>
  <h1>Payment SuccessFull..</h1>
  <p>Your Transition ID: {tranId}</p>
  </div>
}
export default SuccessPayment;