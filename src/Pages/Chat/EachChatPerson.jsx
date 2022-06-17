import {useState, useEffect} from 'react'
import zikyan from '../../images/zikyan_dp.jpg';
import { getUserById } from '../../service/api';

export default function EachChatPerson({friend}) {
  const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
  const [user, setUser] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const getUser = await getUserById(friend)
            setUser(getUser)
        }
        fetchData()
    },[])
  return (
    <div className="chat-single-friend">
        <img style={{zIndex:'1'}} className='chat-user-dp' src={user?.profilePicture || defaultImage} alt="" />
        <div className="chat-below-image">
            <p>{user?.first}</p>
        </div>
    </div>
  )
}
