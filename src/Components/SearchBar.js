import React,{useState} from 'react'


function SearchBar(props) {
    const{setQuery} = props
    
    
  return (
    <div>
      <input
          type="text"
          placeholder="Search..."
          onChange={(e)=>setQuery(e.target.value)}
          style={{ marginLeft: "230px", marginBottom: "20px", height: "30px" }}
        />
    </div>
  )
}

export default SearchBar
