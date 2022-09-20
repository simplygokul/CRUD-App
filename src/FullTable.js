import './App.css';
import * as React from 'react';
import { useState } from 'react';
import data from './rows.json'
import Headings from './Headings.json'
import AddIcon from '@mui/icons-material/Add';
import AddModal from './Components/AddModal';
import Pagination from './Components/pagination';
import NoSearchTable from './Components/NoSearchTable';
import SearchBar from './Components/SearchBar';
import SearchTable from './Components/SearchTable';


//import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
function FullTable() {
  const [modal,setModal] = useState(false)
  const [heads,setHeads] = useState(Headings)
  const[query,setQuery]=useState("")
  const [rows,setRows] = useState(data)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [search,setSearch] = useState(false)
  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  const currentPosts = rows.slice(indexOfFirstPost, indexOfLastPost);
  

  

  
  const toggleModal=()=>{
    setModal(!modal)
    // setRows([...rows,{id:rows.length,firstName:firstName,secondName:secondName,Email:Email}])
    // console.log(rows,"HI")
  }

  
  
  return (
    <div>
    <div className='add-btn' onClick={toggleModal}>
      <AddIcon />
      </div>
      <SearchTable query={query} heads={heads} rows={rows} setRows={setRows} currentPosts={currentPosts} />
      <Pagination
              postsPerPage={postsPerPage}
              totalPosts={rows.length}
              paginate={paginate}
          />
        {modal && <AddModal rows={rows} setModal={setModal}  setRows={setRows} modal={modal}/>}
      </div>
  );
}

export default FullTable;
