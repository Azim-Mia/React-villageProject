import React,{useState,useEffect} from 'react'
//import {Link} from 'react-router-dom'
import Search from './searchSection.js';
import axios from 'axios';
import './product.css'
import Allproductrecived from './productDisplayComponent.js'
const Product=()=>{
  const [allProduct,setAllProduct]=useState([]);
  const [filterProduct,setFilterProduct]=useState(allProduct);
  const [error,setError]=useState(null);
  const url="http://localhost:3001/read"
  const makeRequest=async(url)=>{
try{
      const res= await axios.get(url,{withCredentials:true});
      const findData=res.data.payload.findAll;
    setAllProduct(findData)
    setFilterProduct(findData)
 setError(null)
}catch(error){
    setError(error)
}
  }
  useEffect(()=>{
    makeRequest(url);
  },[])
  const handleRemoveProduct=(name)=>{
  const filters=filterProduct.filter((product)=> product.name !== name)
  setFilterProduct(filters);
  }
  const handleOnsearchValue=(searchValue)=>{
    let value=searchValue.toLowerCase();
    const newProduct=allProduct.filter((product)=>{
      const productName=product.name.toLowerCase();
      return productName.startsWith(value);
    })
   setFilterProduct(newProduct); 
  }
  return <>
  <div><Search onSearchValue={handleOnsearchValue} /></div>
  <div>
  {error && <h2>{error.message}</h2>}
  <Allproductrecived allProduct={filterProduct} onRemoveProduct={handleRemoveProduct} /></div>
  </>
}
export default Product