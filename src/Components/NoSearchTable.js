import React from 'react'
import EditRow from './EditRow';
import NonEditRow from './NonEditRow';
import { useState } from 'react';

function NoSearchTable(props) {
    
    const [editId,setEditId] = useState()
    

    const{currentPosts,setRows,heads}=props
    const [head] = heads
    

    

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
            <th>{head.id }</th>
            <th>{head.firstName}</th>
            <th>{head.secondName}</th>
            <th>{head.email}</th>
            <th>{head.edit}</th>
          </tr>
          </thead>
          <tbody>
          {currentPosts && currentPosts.map((row,i)=>{
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

export default NoSearchTable
