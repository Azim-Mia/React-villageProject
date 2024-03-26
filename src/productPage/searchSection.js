import React,{useState,useEffect} from 'react'
const Search=(props)=>{
  const [searchText, setInputSearchText]=useState('');
  const handleInputValue=(e)=>{
    setInputSearchText(e.target.value);
  };
 /*const handleSubmit=(e)=>{
    e.preventDefault();
    props.onSearchValue(searchText)
  }*/
  
  useEffect(()=>{
    props.onSearchValue(searchText);
  })
  return <>
<input type="text" onChange={handleInputValue} value={searchText} />
  </>
}
export default Search;