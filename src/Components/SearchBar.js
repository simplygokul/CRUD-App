import React,{useState} from 'react'


function SearchBar(props) {
    const{setQuery} = props
    const searchFunc=(e)=>{
        setQuery(e.target.value)
    }
  return (
    <div>
      <input
          type="text"
          placeholder="Search..."
          onChange={()=>searchFunc()}
          style={{ marginLeft: "230px", marginBottom: "20px", height: "30px" }}
        />
    </div>
  )
}

export default SearchBar
