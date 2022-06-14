import { useEffect, useState, useRef } from 'react';
import './post.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link, useParams } from 'react-router-dom';
import { getPostByIdOne, getUserById, reportPost, addPostLike } from '../../service/api';
import  {format}  from 'timeago.js';
import { useSelector } from 'react-redux';
import SubmitComment from '../../Components/EachComment/SubmitComment';


export default function Post(props) {
    const [post, setPost] = useState()
    const [postUser, setPostUser] = useState()
    const { id } = useParams()
    const { user }=useSelector((state)=>state.auth)
    const [like,setLike] = useState()
    const [isLiked,setIsLiked] = useState(false)
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"

    useEffect(()=>{
        const fetchData = async ()=>{
                const findPost = await getPostByIdOne(id)
                const findUser = await getUserById(findPost?.user)
                setPost(findPost)
                setPostUser(findUser)
                setLike(findPost?.count)
        }
        fetchData()
    },[id])
    const handleReport = async (e) =>{
        await reportPost(e,{currentUser:user?._id})
        window.location.reload(false)
    }
    useEffect(() => {
        setIsLiked(post?.vote.includes(user?._id));
      }, [user?._id, post?.vote]);
  
      const likeHandler = async (id)=>{
        await addPostLike(id,{userId:user?._id})
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
      }

  return (
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
                                <p className='post-post-time-tag'>{format(post?.createdAt)}</p>
                            </div>
                        </div>
                </div>
                    {   post?.reportuser.includes(user?._id)? '':
                        <div className="post-post-right">
                            <button className='post-button-save' onClick={()=>handleReport(post?._id)}>Report</button>
                        </div>
                    }
            </div>
            {/* <p className={`post-post-caption ${props.darkmode?"changeModeP":""}`} style={{marginTop:'10px', cursor:'auto'}}>{post?.text}</p>

                <div className={`post-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='post-mainpost-image' src={post?.img} alt="" />
                </div> */}

                <div className="eachpost-eachpost-center">
                        
                        <div className={`mainbar-mainpost ${props.darkmode?"changeModelite":""}`}>
                            <p className={`post-post-caption ${props.darkmode?"changeModeMain":""}`} style={{marginTop:'10px'}}>{post?.text}</p>
                            <img className='post-mainpost-image' src={post?.img} alt="" />
                        </div>
                        
                    </div>
                <div className="post-mainpost-below">
                        <div className="post-mainpost-below-left">
                        <div style={{marginLeft:'10px'}} className="mainbar-mainpost-button-flex-parent">
                                    <p style={{marginTop:'6px', marginRight:'10px'}} className='like-count'>{ like }</p>
                                    <button style={{width:'80px'}} onClick={()=>likeHandler(post?._id)}>
                                      { isLiked? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                    </button>
                                    {/* <button style={{width:'80px'}} onClick={()=>dislikeHandler(post?._id)}><ArrowDownwardIcon /></button> */}
                                    <Link style={{textDecoration:'none'}} to={`/post/${post?._id}`}><button style={{width:'80px'}}><ChatBubbleOutlineIcon style={{fontSize:'20px', marginRight:'5px'}}/> <p className='like-count'>{post?.comment}</p> </button></Link>
                                </div>
                        </div>
                        <div className="post-mainpost-below-right">
                            <button className='post-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='post-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='mainbar-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
                <div style={{marginTop:'20px', marginLeft:'10px'}} className="post-comment-text">
                    <p>{post?.comment} Comments</p>
                </div>
        </div>
        <SubmitComment user={user} id={id} post={post} />
    </div>
  )
}
