import { useState, useEffect } from 'react'
import { getUserById } from '../../service/api'
import { Link } from 'react-router-dom'

export default function Friends({friend}) {
    const [user, setUser] = useState()
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"

    useEffect(()=>{
        const fetchData = async ()=>{
            const getUser = await getUserById(friend)
            setUser(getUser)
        }
        fetchData()
    },[])
  

  return (
    <div className="admin-vertical-dots">
        <div className="admin-alluser">
             <a href={`/profile/${user?.username}`}> <img className='mainbar-post-dp' src={user?.profilePicture || defaultImage} alt="" /> </a>
             <a style={{textDecoration:'none', color:"black",fontWeight:'600'}} href={`/profile/${user?.username}`}>
                {user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}
            </a>
        </div>
    </div>
  )
}
