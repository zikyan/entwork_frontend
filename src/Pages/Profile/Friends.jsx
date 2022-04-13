import { useState, useEffect } from 'react'
import { getUserById } from '../../service/api'
import { Link } from 'react-router-dom'

export default function Friends({friend}) {
    const [user, setUser] = useState()

    useEffect(()=>{
        const fetchData = async ()=>{
            const getUser = await getUserById(friend)
            setUser(getUser)
        }
        fetchData()
    },[])
  return (
    <div>
        <div className="mainbar-post-username">
            <img className='mainbar-post-dp' src={user?.profilePicture} alt="" />
            {user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}
        </div>
    </div>
  )
}
