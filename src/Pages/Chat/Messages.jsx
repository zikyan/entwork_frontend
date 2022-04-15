import React from 'react'
import { useState, useEffect } from 'react';
import zikyan from '../../images/zikyan_dp.jpg';
import { getUserById } from '../../service/api';
import { format } from 'timeago.js';


export default function Messages({message, own}) {
  const [img, setImg] = useState()
  const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
  useEffect(()=>{
    const fetchData = async ()=>{
        const getUser = await getUserById(message?.sender)
        setImg(getUser)
    }
    fetchData()
},[])
  return (
      <div className={own ?'chat-messages own':''}>
        <div className="chat-messages">
            <img className='chat-user-dp' src={img?.profilePicture || defaultImage} alt="" />
            <div className="chat-message-time">
              <p className='chat-message-style'>{message?.text}</p>
              <p className='chat-time-style'>{format(message?.createdAt)}</p>
            </div>
        </div>
    </div>
  )
}
