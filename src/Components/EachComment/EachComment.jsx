import { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { format } from 'timeago.js';
import { reportComment, addCommentLike } from '../../service/api';
import CommentUserName from './CommentUserName';
import { useSelector } from 'react-redux';

export default function EachComment({comments}) {
    const { user }=useSelector((state)=>state.auth)
    const [like,setLike] = useState(comments?.count)
    const [isLiked,setIsLiked] = useState(false)
    // const [username, setUsername] = useState()
    // useEffect(()=>{
    //     const fetchData = async ()=>{
    //         const newUser = await getUserById(comments?.user)
    //         setUsername(newUser)
    //     }
    //     fetchData()
    // },[])
    useEffect(() => {
        setIsLiked(comments?.vote.includes(user?._id));
      }, [user?._id, comments?.vote]);
  
      const likeHandler = async (id)=>{
        console.log(id)
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
        {
            comments?.map((comment)=>(
                <div key={comment?.commentText} style={{marginTop:'20px'}} className="post-comment-people">
                    {/* <img className='comment-post-dp' src={faizan} alt="" /> */}
                        <div className="comment-post-username">
                            <div className="comment-name-time-flex">
                                <CommentUserName comment={comment?.user} />
                                {/* <p style={{fontWeight:'600'}}>{username?.first}</p> */}
                                <p className='comment-post-time'>&nbsp;{format(comment?.createdAt)}</p>
                                {
                                    comment?.reportuser.includes(user?._id)? '':
                                    <div className="post-post-right">
                                        <button className='post-button-save' onClick={()=>handleReportComment(comment?._id)}>Report</button>
                                    </div>
                                }
                            </div>
                            
                                <p className='comment-people-text'>{comment?.commentText}</p>

                                {/* <div className="comment-post-votes">
                                <div className="comment-votes-flex1">
                                    <button style={{color:'#999999',fontSize:'20px'}} onClick={()=>likeHandler(comments?._id)}>
                                        { isLiked? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                    </button>
                                    </div>
                                    
                                </div> */}

                                <div className="comment-topcomment-votes">
                                    <div className="comment-votes-flex1">
                                    <p className='comment-votes-style'>{ like }</p>
                                    <div className="mainbar-mainpost-below-left-comment">
                                    <button style={{color:'#999999',fontSize:'20px', marginTop:'6px'}} onClick={()=>likeHandler(comment?._id)}>
                                        { isLiked? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                    </button>
                                    </div>
                                        
                                    </div>
                                </div>
                        </div>   
                    </div>
            ))
        }
        </>  
    
  )
}
