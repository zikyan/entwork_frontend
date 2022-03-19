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
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, reset } from '../../features/auth/authSlice';
import zikyan from '../../images/zikyan_dp.jpg';

export default function Navbar(props) {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)

    const handleLogout=()=>{
        dispatch(logoutUser())
        dispatch(reset())
        navigate('/')
    }

    return (
        <div>
        <div className={`navbar-parent ${props.darkmode?"changeModenav":""}`}>
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
                    <li><DarkModeRoundedIcon className='navbar-navicons-right navbar-navicons-right-selected' onClick={props.changeMode}/></li>
                    <li><SendRoundedIcon className={`navbar-navicons-right ${props.darkmode?"login-button-darkmode":""}`} /></li>
                    {
                    user ? 
                    (   <>
                            <Link to='/profile'><img className='navbar-post-dp' src={zikyan} alt="" /></Link>
                            <Link to='/profile' style={{textDecoration:'none', color:'#000'}}><li><p className='navbarDynamicUserName'>{user.first?.charAt(0).toUpperCase() + user.first?.slice(1)}</p></li></Link>
                            <li><button onClick={handleLogout}  className='navbar-signup-button'>Logout</button></li>
                        </>
                    )
                    :
                    (<>
                    
                    {/* <li data-toggle="modal" data-target="#loginModal">Login</li> */}
                    <Link to='/loginfirst' style={{textDecoration:'none', marginRight:'5px'}}><li className={`navbar-navicons-right ${props.darkmode?"login-button-darkmode":""}`}>Login</li></Link>
                    <Link to='/registerfirst' style={{textDecoration:'none'}}><li><button  className='navbar-signup-button'>Signup</button></li></Link>

                    </>)}
                
                </ul>
            </div>
        </div>
        </div>
    )
}
