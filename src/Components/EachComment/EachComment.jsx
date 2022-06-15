import { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { format } from 'timeago.js';
import { reportComment, addCommentLike, getUserById } from '../../service/api';
import CommentUserName from './CommentUserName';
import { useSelector } from 'react-redux';

export default function EachComment({comment}) {
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
    const { user }=useSelector((state)=>state.auth)
    const [like,setLike] = useState(comment?.count)
    const [isLiked,setIsLiked] = useState(false)
    const [username, setUsername] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const newUser = await getUserById(comment?.user)
            setUsername(newUser)
        }
        fetchData()
    },[])
    useEffect(() => {
        setIsLiked(comment?.vote.includes(user?._id));
      }, [user?._id, comment?.vote]);
  
      const likeHandler = async (id)=>{
        await addCommentLike(id,{userId:user?._id})
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
      }
    const handleReportComment = async (e) =>{
        await reportComment(e,{currentUser:user?._id})
        window.location.reload(false)
    }
  return (
      <>
      <div style={{padding:'10px'}} className="topcomment-comment-people topcomment-subparent">
                <div style={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'start'}} key={comment?.commentText} className="post-comment-people1">
                    {/* <img className='comment-post-dp' src={faizan} alt="" /> */}
                        <div className="comment-post-username">
                            <div className="comment-name-time-flex">
                                {/* <CommentUserName comment={comments?.user} /> */}
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <img className='comment-post-dp' src={username?.profilePicture || defaultImage} alt="" />
                                    <p style={{fontWeight:'600'}}>
                                        {username?.first?.charAt(0).toUpperCase() + username?.first?.slice(1)} {username?.last?.charAt(0).toUpperCase() + username?.last?.slice(1)}
                                    </p>
                                    <p className='comment-post-time'>&nbsp;{format(comment?.createdAt)}</p>
                                </div>
                                {/* <p style={{fontWeight:'600'}}>{username?.first}</p> */}
                                
                                
                                
                            </div>
                            
                                {/* <p className='comment-people-text'>{comment?.commentText}</p>

                                <div className="comment-topcomment-votes">
                                    <div className="comment-votes-flex1">
                                    <p className='comment-votes-style'>{ like }</p>
                                    <div className="mainbar-mainpost-below-left-comment">
                                    <button style={{color:'#999999', marginTop:'4px'}} onClick={()=>likeHandler(comment?._id)}>
                                        { isLiked? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                    </button>
                                    </div>
                                        
                                    </div>
                                </div> */}
                                

                            <div style={{marginLeft:"35px"}} className="comment-topcomment-username">
                            
                                <p className='comment-people-text'>{comment?.commentText}</p>

                                <div className="comment-topcomment-votes">
                                    <div className="comment-votes-flex1">
                                        <p style={{marginRight:'10px', fontSize:"15px"}} className='comment-votes-style'>{like}</p>
                                        <p style={{marginTop:'5px'}} onClick={()=>likeHandler(comment?._id)}>
                                            { isLiked? <ArrowDownwardIcon style={{color:'#999999',fontSize:'20px'}} /> : <ArrowUpwardIcon style={{color:'#999999',fontSize:'20px', fontWeight:'700'}} />}
                                        </p>
                                    </div>
                                </div>
                            </div>   
                        
                        </div>  
                        <div>
                                {
                                    user?._id !== comment?.user?
                                    comment?.reportuser.includes(user?._id)? '':
                                    <div className="post-post-right">
                                        <button className='post-button-save' onClick={()=>handleReportComment(comment?._id)}>Report</button>
                                    </div>
                                    :''
                                }
                        </div> 
                    </div>
                    </div> 
        </>  
    
  )
}
