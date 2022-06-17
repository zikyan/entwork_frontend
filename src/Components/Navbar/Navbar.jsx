import { useEffect, useState } from 'react';
import './navbar.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import RecommendIcon from '@mui/icons-material/Recommend';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, reset } from '../../features/auth/authSlice';
import { getUserById } from '../../service/api';
import ShareIcon from '@mui/icons-material/Share';
import SearchBar from './SearchBar';

export default function Navbar(props) {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)
    const [freshUser, setFreshUser] = useState()
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"

    const handleLogout=()=>{
        dispatch(logoutUser())
        dispatch(reset())
        navigate('/')
    }
    useEffect(()=>{
        const fetchData = async ()=>{
            const fresh = await getUserById(user?._id)
            setFreshUser(fresh)
        }
        fetchData()
    },[])

    return (
        <div className='ziktest'>
        <div className={`navbar-parent ${props.darkmode?"changeModenav":""}`}>
            <div className="navbar-left">
                <Link to='/' className='navbar-logo'><p>EntWork</p></Link>
                <p className='navbar-logo-dot'>.</p>
            </div>
            <div className="navbar-middle">
                <ul className='navbar-ul'>
                    <Link to='/'><li><HomeRoundedIcon className='navbar-navicons-selected'/></li></Link>
                    {
                        user?
                        <Link to='/shared'><li><ShareIcon className='navbar-navicons'/></li></Link>
                        :
                        <Link to='/login'><li><ShareIcon className='navbar-navicons'/></li></Link>
                    }
                    <Link to='/work'><li><BusinessCenterIcon className='navbar-navicons'/></li></Link>
                    {
                        user?
                        <>
                            <Link to='/twittervirals'><li><TwitterIcon className='navbar-navicons'/></li></Link>
                            <Link to='/weeklywinner'><li><EmojiEventsRoundedIcon className='navbar-navicons'/></li></Link>
                            <Link to='/recommended'><li><RecommendIcon className='navbar-navicons'/></li></Link>
                        </>
                        :
                        <>
                            <Link to='/login'><li><TwitterIcon className='navbar-navicons'/></li></Link>
                            <Link to='/login'><li><EmojiEventsRoundedIcon className='navbar-navicons'/></li></Link>
                            <Link to='/login'><li><RecommendIcon className='navbar-navicons'/></li></Link>
                        </>
                    }
                    
                    <li><SearchBar /></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul className='navbar-right-ul'>
                    <li><DarkModeRoundedIcon className='navbar-navicons-right navbar-navicons-right-selected' onClick={props.changeMode}/></li>
                    <Link style={{padding:'0px 10px'}} to='/chat'><li><SendRoundedIcon className={`navbar-navicons-right ${props.darkmode?"login-button-darkmode":""}`} /></li></Link>
                    {
                    user ? 
                    (   <>
                            <Link to={`/profile/${user?.username}`}><img className='navbar-post-dp' src={freshUser?.profilePicture || defaultImage} alt="" /></Link>
                            <Link to={`/profile/${user?.username}`} style={{textDecoration:'none', color:'#000'}}><li><p className='navbarDynamicUserName'>{user.first?.charAt(0).toUpperCase() + user.first?.slice(1)}</p></li></Link>
                            <li><button onClick={handleLogout}  className='navbar-signup-button'>Logout</button></li>
                        </>
                    )
                    :
                    (<>
                    
                    {/* <li data-toggle="modal" data-target="#loginModal">Login</li> */}
                    <Link to='/login' style={{textDecoration:'none', marginRight:'5px'}}><li className={`navbar-navicons-right ${props.darkmode?"login-button-darkmode":""}`}>Login</li></Link>
                    <Link to='/register' style={{textDecoration:'none'}}><li><button  className='navbar-signup-button'>Signup</button></li></Link>

                    </>)}
                
                </ul>
            </div>
        </div>
        </div>
    )
}
