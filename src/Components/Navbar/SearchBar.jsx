import { useState, useEffect, useRef } from 'react';
import Table from './Table';
import { getSearch } from '../../service/api';
import axios from 'axios';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchBar() {
    const [query, setQuery] = useState()
    const [data, setData] = useState([]);

    const [input, setInput] = useState()
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //     const res = await axios.get(`http://localhost:3000/api/?q=${query}`);
    //       setData(res.data);
    //     };
    //     if (query?.length > 2) fetchData()
    //   }, [query]);

      const handleCross=()=>{
        var x = document.getElementById("hide");
          
            x.style.display = "none";
          
      }

      const handleSearch = async (e)=>{
        e.preventDefault()
        const res = await axios.get(`http://localhost:3000/api/?q=${input}`);
          setData(res.data);
        };

      // onChange={(e) => setQuery(e.target.value.toLowerCase())}

  return (

    <div >
        <form onSubmit={handleSearch}>
          <input className='searchbar' name='input' onChange={(e)=>setInput(e.target.value)}  placeholder='Search with name, #tags, @users' type="text"/>
          <input type="submit" style={{display:'none'}}/>
        </form>
        {
          input?.length>0?
          <div  id='hide'>
            <div className='close-icon-search'>
              <CloseIcon  onClick={handleCross} />
            </div>
            <Table data={data} />
          </div> 
          :''   
        }
              
    </div>
    
  )
}
