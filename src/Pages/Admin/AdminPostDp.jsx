import { useState, useEffect } from 'react'
import { getUserById } from '../../service/api'
import './admin.css'
import { Link } from 'react-router-dom'

export default function AdminPostDp({post}) {
    const [username, setUsername] = useState()
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
    useEffect(()=>{
        const fetchData = async ()=>{
            const newUser = await getUserById(post?.user)
            setUsername(newUser)
        }
        fetchData()
    },[])
  return (
    <div>
        <Link to={`/profile/${username?.username}`}><img className='mainbar-post-dp' src={username?.profilePicture || defaultImage} alt="" /></Link>
    </div>
  )
}
