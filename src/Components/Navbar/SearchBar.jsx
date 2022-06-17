import { useState, useEffect } from 'react';
import Table from './Table';
import { getSearch } from '../../service/api';
import axios from 'axios';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchBar() {
    const [query, setQuery] = useState()
    const [data, setData] = useState([]);

    
    
    useEffect(() => {
        const fetchData = async () => {
        const res = await axios.get(`http://localhost:3000/api/?q=${query}`);
          setData(res.data);
        };
        if (query?.length > 2) fetchData()
      }, [query]);

      const handleCross=()=>{
        var x = document.getElementById("hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
      }

  return (

    <div >
        <input className='searchbar' onChange={(e) => setQuery(e.target.value.toLowerCase())} placeholder='Search with name, #tags, @users' type="text"/>
        {
          query?.length>0?
          <div  id='hide'>
            <div className='close-icon-search'>
              <CloseIcon  onClick={handleCross} />
            </div>
            <Table data={data} />
          </div>
          
          :''
          // <div className='hihi'>
          //   <SearchIcon className='searchicon'/>
          // </div>
          

        }
        
    </div>
    
  )
}
