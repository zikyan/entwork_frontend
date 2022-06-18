import { useState } from 'react'
import EachComment from './EachComment'
import { postComment } from '../../service/api'
import { toast } from 'react-toastify';

export default function SubmitComment({user, id, comment}) {
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
    const [commentText, setCommentText] = useState()
    const [res, setRes] = useState([])

    const handleCommentSubmit = async (e)=>{
        e.preventDefault()
        const commentData={
            user:user._id,
            post:id,
            commentText:commentText
        }
        
        const response = await postComment(commentData)
        toast.success("Comment Posted");
        setRes(response)

    }
  return (
        <div>
            {
                user?
                <form onSubmit={handleCommentSubmit}>
                <div className="post-comment-parent">
                    <div className="post-comment-1">
                        <img className='post-comment-dp' src={user?.profilePicture || defaultImage} alt="" />
                        <textarea className='post-comment-textarea' onChange={(e)=>{setCommentText(e.target.value)}} placeholder='Type your comment here' cols="1" rows="1"></textarea>
                    </div>
                    <button type='submit' className='post-comment-button'>Post</button>
                </div>
            </form>:''
            }
            <EachComment user={user} id={id} comment={comment}/>
        </div>
  )
}
