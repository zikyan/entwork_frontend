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

export default function LeftSideBar(props) {
  return (
    <div className='leftsidebar-parent' >
      <div className={`leftsidebar-upper ${props.darkmode?"changeModeside":""}`}>
        <Link style={{textDecoration:'none'}} to='/addpost'><button className='leftsidebar-toppost-button'><AddBoxIcon style={{fontSize:'20px',marginRight:'5px'}} /> Add Post</button></Link>
        <Link style={{textDecoration:'none'}} to='/toppost'><button className='leftsidebar-toppost-button'><EmojiEventsIcon style={{fontSize:'20px',marginRight:'5px'}} /> Top Posts</button></Link>
        <Link style={{textDecoration:'none'}} to='/topcomment'><button className='leftsidebar-toppost-button'><AutoAwesomeIcon style={{fontSize:'20px',marginRight:'5px'}} /> Top Comments</button></Link>
      </div>
      <div className={`${props.darkmode?"darkleftsidebar-upper2":"leftsidebar-upper2"}`}>
      <p className={`${props.darkmode?"darkleftsidebar-text":"leftsidebar-text"}`}>EntWork</p>
          <ul className={` leftsidebar-filter ${props.darkmode?"leftsidebar-lower-final-dark":""}`}>
           <Link className='leftsidebar-ul-link' to='/'><li className={`${props.darkmode?"darkleftsidebar-filter-selected":"leftsidebar-filter-selected"}`}><AllInclusiveIcon className='leftsidebar-material-icon'/>All</li></Link>
            <Link to='/?category=Hot' className='leftsidebar-ul-link'><li><LocalFireDepartmentIcon className='leftsidebar-material-icon'/>Hot</li></Link>
            <Link to='/?category=Trending' className='leftsidebar-ul-link'><li><TrendingUpIcon className='leftsidebar-material-icon'/>Trending</li></Link>
            <Link to='/?category=Fresh' className='leftsidebar-ul-link'><li><AutoAwesomeIcon className='leftsidebar-material-icon'/>Fresh</li></Link>
            <Link to='/?category=Top' className='leftsidebar-ul-link'><li><ClearAllIcon className='leftsidebar-material-icon'/>Top</li></Link>
            <Link to='/?category=Random' className='leftsidebar-ul-link'><li><ShuffleIcon className='leftsidebar-material-icon'/>Random</li></Link>
          </ul>
      
      
      
      <p className={`${props.darkmode?"darkleftsidebar-lower-text":"leftsidebar-lower-text"}`}>Top Tags</p>
        <div className="leftsidebar-filter">
          <ul className={`${props.darkmode?"leftsidebar-lower-final-dark":""}`}>
          <Link className='leftsidebar-ul-link' to='/?tag=pakistan'><li>#pakistan</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=imrankhan'><li>#imrankhan</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=onepunchman'><li>#onepunchman</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=tiktok'><li>#tiktok</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=dragonball'><li>#dragonball</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=demonslayer'><li>#demonslayer</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=baki'><li>#baki</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=cringe'><li>#cringe</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=anime'><li>#anime</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=bts'><li>#bts</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=attackontitans'><li>#attackontitans</li></Link>
          <Link className='leftsidebar-ul-link' to='/?tag=stiensgate'><li>#stiensgate</li></Link>
          </ul>
        </div>
        </div>
    </div>
  )
}
