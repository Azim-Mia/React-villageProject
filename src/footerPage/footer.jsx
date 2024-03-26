const Footer=()=>{
  return <footer className="container_footer">
  <div className="left_side">
  <form className="form_cintainer">
  <lable for id="subscribe">Subscribe:</lable>
 <div> <input type="email" className="input_footer" id="subscribe" name="subscribe" /></div>
 <div className="btn_container"><button className="btn">subscribe</button></div>
  </form>
  </div>
    <div className="right_side">
    <p>&copy:Azim Islam</p>
  </div>
  
  </footer>
}
export default Footer