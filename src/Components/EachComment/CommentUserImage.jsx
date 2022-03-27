import { useState, useEffect } from 'react'
import { getUserById } from '../../service/api'

export default function CommentUserImage({comment}) {
    const [username, setUsername] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const newUser = await getUserById(comment)
            setUsername(newUser)
        }
        fetchData()
    },[])
  return (
    <div>
        <img className='comment-post-dp' src={username?.profilePicture} alt="" />
    </div>
  )
}
