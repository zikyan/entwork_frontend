import { useState, useEffect } from 'react'
import { getUserById } from '../../service/api'
import './admin.css'
import { Link } from 'react-router-dom'

export default function AdminPostUsername({post}) {
    const [username, setUsername] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const newUser = await getUserById(post?.user)
            setUsername(newUser)
        }
        fetchData()
    },[])
  return (
    <div style={{display:'flex'}}>
        <Link style={{textDecoration:'none', color:"black",fontWeight:'600'}} to={`/profile/${username?.username}`}>
            {username?.first?.charAt(0).toUpperCase() + username?.first?.slice(1)} {username?.last?.charAt(0).toUpperCase() + username?.last?.slice(1)}
        </Link>
    </div>
  )
}
