import { useState, useEffect } from 'react'
import { getUserById } from '../../service/api'

export default function CommentUserImage({comment}) {
  const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
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
        <img className='comment-post-dp' src={username?.profilePicture || defaultImage} alt="" />
    </div>
  )
}
