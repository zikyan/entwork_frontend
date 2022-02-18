import React from 'react';
import './leftsidebar.css';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Link } from 'react-router-dom';

export default function LeftSideBar() {
  return (
    <div className="leftsidebar-parent">
      <div className="leftsidebar-upper">
        <Link style={{textDecoration:'none'}} to='/addpost'><button className='leftsidebar-toppost-button'><AddBoxIcon style={{fontSize:'20px',marginRight:'5px'}} /> Add Post</button></Link>
        <Link style={{textDecoration:'none'}} to='/toppost'><button className='leftsidebar-toppost-button'><EmojiEventsIcon style={{fontSize:'20px',marginRight:'5px'}} /> Top Posts</button></Link>
        <Link style={{textDecoration:'none'}} to='/topcomment'><button className='leftsidebar-toppost-button'><AutoAwesomeIcon style={{fontSize:'20px',marginRight:'5px'}} /> Top Comments</button></Link>
      </div>
      <div className="leftsidebar-upper2">
      <p className='leftsidebar-text'>EntWork</p>
          <ul className='leftsidebar-filter'>
            <li className='leftsidebar-filter-selected'><AllInclusiveIcon className='leftsidebar-material-icon'/>All</li>
            <li><LocalFireDepartmentIcon className='leftsidebar-material-icon'/>Hot</li>
            <li><TrendingUpIcon className='leftsidebar-material-icon'/>Trending</li>
            <li><AutoAwesomeIcon className='leftsidebar-material-icon'/>Fresh</li>
            <li><ClearAllIcon className='leftsidebar-material-icon'/>Top</li>
            <li><ShuffleIcon className='leftsidebar-material-icon'/>Random</li>
          </ul>
      
      
      
      <p className='leftsidebar-lower-text'>Top Tags</p>
        <div className="leftsidebar-filter">
          <ul>
            <li>#sarcasm</li>
            <li>#depressed</li>
            <li>#one punch man</li>
            <li>#tiktok</li>
            <li>#dragon ball</li>
            <li>#demon slayer</li>
            <li>#baki</li>
            <li>#cringe</li>
            <li>#anime</li>
            <li>#bts</li>
            <li>#attack on titans</li>
            <li>#stiens gates</li>
            <li>#death note</li>
            <li>#tokyo ghoul</li>
          </ul>
        </div>
        </div>
    </div>
  )
}
