import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import CommentUserName from '../../Components/EachComment/CommentUserName';
import { format } from 'timeago.js';
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
                                        <p className='comment-votes-style'>{comment?.count}</p>
                                        <ArrowUpwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                    </div>
                                </div>
                        </div>     
            </div>
  )
}
