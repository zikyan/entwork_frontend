import { useState, useEffect } from 'react'
import faizan from '../../images/faizan.jpg';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { format } from 'timeago.js';
import { getUserById } from '../../service/api';
import CommentUserName from './CommentUserName';
import CommentUserImage from './CommentUserImage'

export default function EachComment({comments}) {
    // const [username, setUsername] = useState()
    // useEffect(()=>{
    //     const fetchData = async ()=>{
    //         const newUser = await getUserById(comments?.user)
    //         setUsername(newUser)
    //     }
    //     fetchData()
    // },[])
  return (
      <>
        {
            comments?.map((comment)=>(
                <div key={comment?.commentText} style={{marginTop:'20px'}} className="post-comment-people">
                    {/* <img className='comment-post-dp' src={faizan} alt="" /> */}
                    <CommentUserImage comment={comment?.user} />
                        <div className="comment-post-username">
                            <div className="comment-name-time-flex">
                                <CommentUserName comment={comment?.user} />
                                {/* <p style={{fontWeight:'600'}}>{username?.first}</p> */}
                                <p className='comment-post-time'>&nbsp;{format(comment?.createdAt)}</p>
                            </div>
                                <p className='comment-people-text'>{comment?.commentText}</p>

                                <div className="comment-post-votes">
                                    <div className="comment-votes-flex1">
                                        <ArrowUpwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                        <p className='comment-votes-style'>180</p>
                                    </div>
                                    <div className="comment-votes-flex2">
                                        <ArrowDownwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                        <p className='comment-votes-style' >12</p>
                                    </div>
                                </div>
                        </div>   
                    </div>
            ))
        }
        </>  
    
  )
}
