import { useState, useEffect } from 'react';
import { getUserById, getPostByIdOne } from '../../service/api';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';


export default function EachTopComment({props, comment}) {
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
    const [postUser, setPostUser] = useState()
    const [commentUser, setCommentUser] = useState()
    const [post, setPost] = useState()

    useEffect(()=>{
        const fetchData = async ()=>{
            const username= await getUserById(comment?.user)
            setCommentUser(username)
            const getPost = await getPostByIdOne(comment?.post)
            setPost(getPost)
            const getPostUser = await getUserById(getPost?.user)
            setPostUser(getPostUser)
        }
        fetchData()
    },[])
  return (
    <div style={{marginBottom:'20px'}} className={`topcomment-parent ${props.darkmode?"darkpost-parent":""}`}>
        <div className="topcomment-upper3">
            <div className="topcomment-topcomment1">
                <div className="topcomment-topcomment-left">
                <Link to={`/profile/${postUser?.username}`}><img className='post-post-dp' src={postUser?.profilePicture || defaultImage} alt="" /></Link>
                        <div className="topcomment-topcomment-username">
                        <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to={`/profile/${postUser?.username}`}>{postUser?.first?.charAt(0).toUpperCase() + postUser?.first?.slice(1)} {postUser?.last?.charAt(0).toUpperCase() + postUser?.last?.slice(1)}</Link>
                        <div className="post-post-belowname">
                                <p className='post-post-time-tag'>#{post?.tag},&nbsp;</p>
                                <p className='post-post-time-tag'>{post?.category},&nbsp;</p>
                                <p className='post-post-time-tag'>{format(post?.createdAt)}</p>
                            </div>
                        </div>
                </div>
            </div>

            <div className={`mainbar-mainpost ${props.darkmode?"changeModelite":""}`}>
                            <p className={`post-post-caption ${props.darkmode?"changeModeMain":""}`} style={{marginTop:'10px'}}>{post?.text}</p>
                            <img style={{marginLeft:'10px'}} className='post-mainpost-image' src={post?.img} alt="" />
                        </div>
                <div className="topcomment-maintopcomment-below">
                        <div style={{marginLeft:'10px'}} className="topcomment-maintopcomment-below-left">
                            <div className="mainbar-mainpost-button-flex-parent">
                                        <p style={{marginTop:'6px', marginRight:'10px'}} className='like-count'>{ post?.count }</p>
                                        <button style={{width:'80px'}}>
                                            <ArrowUpwardIcon />
                                        </button>
                                        {/* <button style={{width:'80px'}} onClick={()=>dislikeHandler(post?._id)}><ArrowDownwardIcon /></button> */}
                                        <Link style={{textDecoration:'none'}} to={`/post/${post?._id}`}><button style={{width:'80px'}}><ChatBubbleOutlineIcon style={{fontSize:'20px', marginRight:'5px'}}/> <p className='like-count'>{post?.comment}</p> </button></Link>
                            </div>
                        </div>
                </div>
                <div className="topcomment-comment-text">
                    <p>{post?.comment} Comments</p>
                </div>
        </div>

            <div className="topcomment-comment-people topcomment-subparent">
            <img className='comment-topcomment-dp' src={commentUser?.profilePicture || defaultImage} alt="" />
                        <div className="comment-topcomment-username">
                            <div className="comment-name-time-flex">
                                <p style={{fontWeight:'600'}}>{commentUser?.first?.charAt(0).toUpperCase() + commentUser?.first?.slice(1)} {commentUser?.last?.charAt(0).toUpperCase() + commentUser?.last?.slice(1)}</p>
                                <p className='comment-topcomment-time'>&nbsp;{format(comment?.createdAt)}</p>
                            </div>
                                <p className='comment-people-text'>{comment?.commentText}</p>

                                <div className="comment-topcomment-votes">
                                    <div className="comment-votes-flex1">
                                        <p style={{marginRight:'10px', fontSize:"15px"}} className='comment-votes-style'>{comment?.count}</p>
                                        <ArrowUpwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                    </div>
                                </div>
                        </div>      
            </div>
    </div>
  )
}
