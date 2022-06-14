import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getUserById } from '../../service/api';
import './profile.css';
import { deleteSavedPost } from '../../service/api';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useSelector } from 'react-redux';


export default function SavedExtra({post, darkMode}) {
    const { user }= useSelector((state)=>state.auth)
    const [temp, setTemp] = useState()
    const [userById, setUserById] = useState()
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
    useEffect(()=>{
        const fetchData = async ()=>{
            const username= await getUserById(post?.user)
            setUserById(username)
        }
        fetchData()
    },[temp])
    const handleDeleteSavedPost = async (postId)=>{
        await deleteSavedPost(postId)
        window.location.reload(false)
      }
  return (
    

<div key={post._id} className="mainbar-upper3">
<div className="mainbar-post1">
    <div className="mainbar-post-left">
    <img className='mainbar-post-dp' src={userById?.profilePicture || defaultImage} alt="" />
            <div className="mainbar-post-username">
            <p style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>
                    {userById?.first?.charAt(0).toUpperCase() + userById?.first?.slice(1)} {userById?.last?.charAt(0).toUpperCase() + userById?.last?.slice(1)}
                    </p>
                <div className="mainbar-post-belowname">
                    <p className='mainbar-post-time-tag'>#{post?.tag},&nbsp;</p>
                    <p className='mainbar-post-time-tag'>{post?.category},&nbsp;</p>
                    <p className='mainbar-post-time-tag'>Saved Post</p>
                </div>
            </div>
    </div>

     
      <>
      <div className="mainbar-post-right">
            <button onClick={()=>handleDeleteSavedPost(post?._id)} className='mainbar-button-save'>Unsave</button>
        </div>
      </>
    
</div>

    <div className="eachpost-eachpost-center">
        
        <div className={`mainbar-mainpost ${darkMode?"changeModelite":""}`}>
            <Link to={`/post/${post?._id}`} className={`mainbar-post-caption ${darkMode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>{post?.text}</p></Link>
            <Link to={`/post/${post?._id}`}><img className='mainbar-mainpost-image' src={post?.img} alt="" /></Link>
        </div>
        
    </div>
    
    <div className="mainbar-mainpost-below">
            <div className="mainbar-mainpost-below-left">
                <div className="mainbar-mainpost-button-flex-parent">
                    <button> <ArrowUpwardIcon /> 1.5k</button>
                    <button><ArrowDownwardIcon />40</button>
                    <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                </div>
            </div>
            <div className="mainbar-mainpost-below-right">
                <button className='mainbar-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                <button className='mainbar-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
            </div>
    </div>
</div>

  )
}
