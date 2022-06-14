import { useState, useEffect } from 'react'
import { getUserById } from '../../service/api'

export default function CommentUserName({comment}) {
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
    <div style={{display:'flex', alignItems:'center'}}>
      <img className='comment-post-dp' src={username?.profilePicture || defaultImage} alt="" />
      <p style={{fontWeight:'600'}}>
        {username?.first?.charAt(0).toUpperCase() + username?.first?.slice(1)} {username?.last?.charAt(0).toUpperCase() + username?.last?.slice(1)}
      </p>
      </div>
  )
}
