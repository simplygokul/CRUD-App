import React from 'react'
import EditRow from './EditRow';
import NonEditRow from './NonEditRow';
import { useState } from 'react';

function SearchTable(props) {
    const [editId,setEditId] = useState()
    

    const{currentPosts,setRows,heads,query}=props
    console.log(query)
    

    

    const deleteUser=(idToRemove)=>{
        console.log(idToRemove)
        const filteredPeople = currentPosts.filter((item) => item.id !== idToRemove);
        setRows(filteredPeople)
      }
    
  return (
    <div>
      <div className='display-style'>
        <form>
        <table> 
          <thead>
          <tr>
            {heads.map((head)=>{
                return(<th>{head.label}</th>)
            })}
          </tr>
          </thead>
          <tbody>
          {currentPosts.filter(user=>user.firstName.toLowerCase().includes(query)).map((row,i)=>{
            return(
              <React.Fragment>
                  {editId==row.id?<EditRow row={row} rows={currentPosts} setEditId={setEditId}/>:<NonEditRow setEditId={setEditId} row={row} index={i} deleteUser={deleteUser}/>}
              </React.Fragment>
            )
          })}
          </tbody>
        </table>
        </form>
      </div>
    </div>
  )
}

export default SearchTable
