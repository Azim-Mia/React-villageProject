import {v4 as uuidv4} from 'uuid'
import {Link} from 'react-router-dom'
//work 2:Recived single product procecing this component
const Product=(props)=>{
  const {id,image,name}=props.product;
//this fuction generate button reletive
  const handleRemoveProduct=(name)=>{
  //perent component product in pass name
  props.onRemoveProduct(name);
  }
return <div>
<article key={id} className="card bg-blue-100 ml-2">
<img className="" src={image} alt="" />
<div className="text_container">
<span className="bagde">store Ready</span>
<span className="bagde2">Offical Store</span>
<h1 className="bagde3">Best Product quality</h1>
<div className="price">
<b>Rp 400.00</b>
</div>
<div>*** rating</div>
</div>
<div className="grid grid-cols-2">
<p className="add_card">Add to Card</p>
<Link to="/card" className="bg-blue-700 text-white ml-2 text-sm">more product..</Link>
<p>min. order: 2 pice</p>
<button onClick={()=>handleRemoveProduct(name)}>remove</button>
</div>
</article>
</div>
}
//work 1:mapping product generate single product
const Allproductrecived=(props)=>{
  //recived props allProduct from product.jsx
  const {allProduct}=props;
  return <section className="grid grid-cols-3">
  {allProduct.map((product)=>{
  //create newProduct form allProduct 
  const newProduct={product, id:uuidv4()}
  // send newProduct Allproductrecived component passing new data
  //onRemoveProduct for infoemation perent data passing chaining...
   return  <Product {...newProduct} key={newProduct.id} onRemoveProduct={props.onRemoveProduct} />
  })}
  </section>
}
export default Allproductrecived; 