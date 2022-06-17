import { useState, useEffect } from 'react';
import './weeklywinner.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router-dom';
import { getUserById } from '../../service/api';

export default function EachWinner({props, post}) {
    const [postUser, setPostUser] = useState()
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"

    useEffect(()=>{
        const fetchData = async ()=>{
            const username= await getUserById(post?.user)
            setPostUser(username)
           
        }
        fetchData()
    },[])
  return (
        <div>
            <div style={{marginBottom:'20px'}} className="admin-panel-heading">
                <p>Top Popular Posts</p>
            </div>
            <div className={`post-parent ${props.darkmode?"darkpost-parent":""}`}>
                <div className="post-upper3">
                    <div className="post-post1">
                        <div className="post-post-left">
                                <Link to={`/profile/${postUser?.username}`}><img className='post-post-dp' src={postUser?.profilePicture || defaultImage} alt="" /></Link>
                                <div className="post-post-username">
                                <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to={`/profile/${postUser?.username}`}>{postUser?.first?.charAt(0).toUpperCase() + postUser?.first?.slice(1)} {postUser?.last?.charAt(0).toUpperCase() + postUser?.last?.slice(1)}</Link>
                                    <div className="post-post-belowname">
                                        <p className='post-post-time-tag'>#{post?.tag},&nbsp;</p>
                                        <p className='post-post-time-tag'>{post?.category},&nbsp;</p>
                                        <p className='post-post-time-tag'>Weekly Winner</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                        <div className="eachpost-eachpost-center">
                                <div className={`mainbar-mainpost ${props.darkmode?"changeModelite":""}`}>
                                <Link style={{textDecoration:'none'}} to={`/post/${post?._id}`}><p className={`post-post-caption ${props.darkmode?"changeModeMain":""}`} style={{marginTop:'10px'}}>{post?.text}</p></Link>
                                <Link to={`/post/${post?._id}`}><img className='post-mainpost-image' src={post?.img} alt="" /></Link>
                                </div>
                        </div>
                        <div className="post-mainpost-below">
                                <div className="post-mainpost-below-left">
                                    <div style={{marginLeft:'10px'}} className="mainbar-mainpost-button-flex-parent">
                                        <p style={{marginTop:'2px', marginRight:'10px'}} className='like-count'>{ post?.count }</p>
                                        <button style={{width:'80px', cursor:'default', transform:'none'}}><ArrowUpwardIcon /></button>
                                        <button style={{width:'80px', cursor:'default', transform:'none'}}><ChatBubbleOutlineIcon style={{fontSize:'20px', marginRight:'5px'}}/> <p className='like-count'>{post?.comment}</p> </button>
                                    </div>
                                    </div>
                        </div>
                    
                </div>
            </div>
            </div>
  )
}
