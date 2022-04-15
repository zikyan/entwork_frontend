import { useState, useEffect } from 'react';
import zikyan from '../../images/zikyan_dp.jpg';
import { getUserById } from '../../service/api';

export default function ChatNameDp({currentChat, user}) {
    const friendId = currentChat?.members?.find((m)=>m !== user?._id)
    const [getFriend, setFriend] = useState()
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"

    useEffect(()=>{
        const fetchData = async ()=>{
            const getUser = await getUserById(friendId)
            setFriend(getUser)
        }
        fetchData()
    },[currentChat, user])
  return (
    <>
        <img className='chat-chatting-dp' src={getFriend?.profilePicture || defaultImage} alt="" />
        <p className='chat-chatting-name'>{getFriend?.first?.charAt(0).toUpperCase() + getFriend?.first?.slice(1)} {getFriend?.last?.charAt(0).toUpperCase() + getFriend?.last?.slice(1)}</p>
    </>
  )
}
