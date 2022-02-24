import React from 'react';
import './navbar.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import RecommendIcon from '@mui/icons-material/Recommend';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar-parent'>
            <div className="navbar-left">
                <Link to='/' className='navbar-logo'><p>EntWork</p></Link>
                <p className='navbar-logo-dot'>.</p>
            </div>
            <div className="navbar-middle">
                <ul className='navbar-ul'>
                    <Link to='/'><li><HomeRoundedIcon className='navbar-navicons-selected'/></li></Link>
                    <Link to='/work'><li><BusinessCenterIcon className='navbar-navicons'/></li></Link>
                    <Link to='/twittervirals'><li><TwitterIcon className='navbar-navicons'/></li></Link>
                    <Link to='/weeklywinner'><li><EmojiEventsRoundedIcon className='navbar-navicons'/></li></Link>
                    <Link to='/recommended'><li><RecommendIcon className='navbar-navicons'/></li></Link>
                    <li><input className='searchbar' placeholder='Search with name, #tags, @users' type="text"/><SearchIcon className='searchicon'/></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul className='navbar-right-ul'>
                    <li><DarkModeRoundedIcon className='navbar-navicons-right navbar-navicons-right-selected'/></li>
                    <li><SendRoundedIcon className='navbar-navicons-right'/></li>
                    <li className='navbar-navicons-right'>Login</li>
                    <li><button className='navbar-signup-button'>Signup</button></li>
                </ul>
            </div>
        </div>
    )
}
