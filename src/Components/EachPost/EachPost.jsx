import { useState, useEffect } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { getUserById } from '../../service/api';
import { format } from 'timeago.js';

export default function EachPost({darkMode, post}) {
    const [user, setUser] = useState([])
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"

    useEffect(()=>{
        const fetchData = async ()=>{
            const username=await getUserById(post.user)
            setUser(username)
        }
        fetchData()
    },[])
  return (
    <div className="mainbar-upper3">
                <div className="mainbar-post1">
                    <div className="mainbar-post-left">
                            <Link to={`/profile/${user?.username}`}><img className='mainbar-post-dp' src={user?.profilePicture || defaultImage} alt="" /></Link>
                            <div className="mainbar-post-username">
                                <Link style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}} to={`/profile/${user?.username}`}>
                                    {user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}
                                    </Link>
                                <div className="mainbar-post-belowname">
                                    <p className='mainbar-post-time-tag'>#{post?.tag},&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>{post?.category},&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>{format(post?.createdAt)}</p>
                                </div>
                            </div>
                    </div>
                        <div className="mainbar-post-right">
                            <button className='mainbar-button-save'>Save</button>
                            <button className='mainbar-button-save mainbar-button-download'>Download</button>
                        </div>
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
                                <button className='mainbar-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                            </div>
                    </div>
                </div>
  )
}
