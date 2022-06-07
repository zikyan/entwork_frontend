import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getUserById } from '../../service/api';


export default function ShareExtra({sharePost, darkMode}) {
    const [userById, setUserById] = useState()
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
    useEffect(()=>{
        const fetchData = async ()=>{
            const username= await getUserById(sharePost?.user)
            setUserById(username)
        }
        fetchData()
    },[])
  return (
    <div style={{display:"flex", alignItems:'start'}}>
        <Link to={`/profile/${userById?.username}`}><img className='mainbar-post-dp' src={userById?.profilePicture || defaultImage} alt="" /></Link>
                                    <Link style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}} to={`/profile/${userById?.username}`}>
                                        {userById?.first?.charAt(0).toUpperCase() + userById?.first?.slice(1)} {userById?.last?.charAt(0).toUpperCase() + userById?.last?.slice(1)}
                            
                                        </Link>
    </div>
  )
}
