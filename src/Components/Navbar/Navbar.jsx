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
import { toast } from 'react-toastify';

export default function Navbar(props) {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)
    const [freshUser, setFreshUser] = useState()
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"

    const handleLogout=()=>{
        dispatch(logoutUser())
        dispatch(reset())
        toast.success("Logged out Sucessfully")
        navigate('/')
    }
    useEffect(()=>{
        const fetchData = async ()=>{
            const fresh = await getUserById(user?._id)
            setFreshUser(fresh)
        }
        fetchData()
    },[])

      const handleHome=()=>{
        var btn1 = document.getElementById("home");
        var btn2 = document.getElementById("share");
        var btn3 = document.getElementById("business");
        var btn4 = document.getElementById("twitter");
        var btn5 = document.getElementById("top");
        var btn6 = document.getElementById("recommend");
        
        btn1.style.color = "#FF451C"
        btn2.style.color = '#C5D0E6'
        btn3.style.color = '#C5D0E6'
        btn4.style.color = '#C5D0E6'
        btn5.style.color = '#C5D0E6'
        btn6.style.color = '#C5D0E6'
      }
      const handleShare=()=>{
        var btn1 = document.getElementById("home");
        var btn2 = document.getElementById("share");
        var btn3 = document.getElementById("business");
        var btn4 = document.getElementById("twitter");
        var btn5 = document.getElementById("top");
        var btn6 = document.getElementById("recommend");
        
        btn1.style.color = "#C5D0E6"
        btn2.style.color = '#FF451C'
        btn3.style.color = '#C5D0E6'
        btn4.style.color = '#C5D0E6'
        btn5.style.color = '#C5D0E6'
        btn6.style.color = '#C5D0E6'
      }
      const handleBusinsess=()=>{
        var btn1 = document.getElementById("home");
        var btn2 = document.getElementById("share");
        var btn3 = document.getElementById("business");
        var btn4 = document.getElementById("twitter");
        var btn5 = document.getElementById("top");
        var btn6 = document.getElementById("recommend");
        
        btn1.style.color = "#C5D0E6"
        btn2.style.color = '#C5D0E6'
        btn3.style.color = '#FF451C'
        btn4.style.color = '#C5D0E6'
        btn5.style.color = '#C5D0E6'
        btn6.style.color = '#C5D0E6'
      }
      const handleTwitter=()=>{
        var btn1 = document.getElementById("home");
        var btn2 = document.getElementById("share");
        var btn3 = document.getElementById("business");
        var btn4 = document.getElementById("twitter");
        var btn5 = document.getElementById("top");
        var btn6 = document.getElementById("recommend");
        
        btn1.style.color = "#C5D0E6"
        btn2.style.color = '#C5D0E6'
        btn3.style.color = '#C5D0E6'
        btn4.style.color = '#FF451C'
        btn5.style.color = '#C5D0E6'
        btn6.style.color = '#C5D0E6'
      }
      const handleTop=()=>{
        var btn1 = document.getElementById("home");
        var btn2 = document.getElementById("share");
        var btn3 = document.getElementById("business");
        var btn4 = document.getElementById("twitter");
        var btn5 = document.getElementById("top");
        var btn6 = document.getElementById("recommend");
        
        btn1.style.color = "#C5D0E6"
        btn2.style.color = '#C5D0E6'
        btn3.style.color = '#C5D0E6'
        btn4.style.color = '#C5D0E6'
        btn5.style.color = '#FF451C'
        btn6.style.color = '#C5D0E6'
      }
      const handleRecommend=()=>{
        var btn1 = document.getElementById("home");
        var btn2 = document.getElementById("share");
        var btn3 = document.getElementById("business");
        var btn4 = document.getElementById("twitter");
        var btn5 = document.getElementById("top");
        var btn6 = document.getElementById("recommend");
        
        btn1.style.color = "#C5D0E6"
        btn2.style.color = '#C5D0E6'
        btn3.style.color = '#C5D0E6'
        btn4.style.color = '#C5D0E6'
        btn5.style.color = '#C5D0E6'
        btn6.style.color = '#FF451C'
      }

    return (
        <div className='ziktest'>
        <div className={`navbar-parent ${props.darkmode?"changeModenav":""}`}>
            <div className="navbar-left">
                <Link to='/' className='navbar-logo' onClick={handleHome}><p>EntWork</p></Link>
                <p className='navbar-logo-dot'>.</p>
            </div>
            <div className="navbar-middle">
                <ul className='navbar-ul'>
                    <Link to='/'><li><HomeRoundedIcon id='home' onClick={handleHome} style={{fontSize:'32px', paddingLeft:'5px'}} className='navbar-navicons-selected'/></li></Link>
                    {
                        user?
                        <Link to='/shared'><li><ShareIcon id='share' onClick={handleShare} className='navbar-navicons'/></li></Link>
                        :
                        <Link to='/login'><li><ShareIcon id='share' onClick={handleShare} className='navbar-navicons'/></li></Link>
                    }
                    <Link to='/work'><li><BusinessCenterIcon id='business' onClick={handleBusinsess} className='navbar-navicons'/></li></Link>
                    {
                        user?
                        <>
                            <Link to='/twittervirals'><li><TwitterIcon id='twitter' onClick={handleTwitter} className='navbar-navicons'/></li></Link>
                            <Link to='/weeklywinner'><li><EmojiEventsRoundedIcon id='top' onClick={handleTop} className='navbar-navicons'/></li></Link>
                            <Link to='/recommended'><li><RecommendIcon id='recommend' onClick={handleRecommend} className='navbar-navicons'/></li></Link>
                        </>
                        :
                        <>
                            <Link to='/login'><li><TwitterIcon id='twitter' onClick={handleTwitter} className='navbar-navicons'/></li></Link>
                            <Link to='/login'><li><EmojiEventsRoundedIcon id='top' onClick={handleTop} className='navbar-navicons'/></li></Link>
                            <Link to='/login'><li><RecommendIcon id='recommend' onClick={handleRecommend} className='navbar-navicons'/></li></Link>
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
                            <a href={`/profile/${user?.username}`}><img className='navbar-post-dp' src={freshUser?.profilePicture || defaultImage} alt="" /></a>
                            <a href={`/profile/${user?.username}`} style={{textDecoration:'none'}}><li><p className={`${props.darkmode?"navbarDynamicUserName-dark":"navbarDynamicUserName"}`}>{user.first?.charAt(0).toUpperCase() + user.first?.slice(1)}</p></li></a>
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
