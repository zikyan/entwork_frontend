import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import faizan from '../../images/faizan.jpg';
import CommentUserName from '../../Components/EachComment/CommentUserName';
import { format } from 'timeago.js';
import CommentUserImage from '../../Components/EachComment/CommentUserImage';
import { Link } from 'react-router-dom';

export default function UserComments({comment}) {
  console.log(comment?._id)
  return (
    <div style={{padding:'20px'}} className="topcomment-comment-people topcomment-subparent">
                        <div className="comment-topcomment-username">
                            <div className="comment-name-time-flex">
                              <CommentUserName comment={comment?.user} />
                                <p className='comment-topcomment-time'>&nbsp;{format(comment?.createdAt)}</p>
                            </div>
                                <Link style={{textDecoration:'none', color:'black'}} to={`/post/${comment?.post}`}>
                                  <p className='comment-people-text'>{comment.commentText}</p>
                                </Link>

                                <div className="comment-topcomment-votes">
                                    <div className="profile-comment-votes-flex1">
                                        <ArrowUpwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                        <p className='comment-votes-style'>180</p>
                                    </div>
                                    <div className="profile-comment-votes-flex2">
                                        <ArrowDownwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                        <p className='comment-votes-style' >12</p>
                                    </div>
                                </div>
                        </div>     
            </div>
  )
}
