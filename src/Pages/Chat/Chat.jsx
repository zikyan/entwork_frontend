import { useState, useEffect, useRef } from 'react';
import './chat.css'
import EachChatPerson from './EachChatPerson';
import Messages from './Messages';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useSelector } from 'react-redux';
import { getConversation, getMessage, postMessage, postConversation } from '../../service/api';
import EachConversation from './EachConversation';
import ChatNameDp from './ChatNameDp';
import {io} from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

export default function Chat() {
    const { user }= useSelector((state)=>state.auth)
    const [conversation, setConversation] = useState([])
    const [currentChat, setCurrentChat] = useState()
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState()
    const [arrivalMessage, setArrivalMessage] = useState(null)
    const socket=useRef()
    const scrollRef = useRef()
    const navigate=useNavigate()

    useEffect(()=>{
        socket.current = io('ws://localhost:8900')
        socket.current.on('getMessage', data =>{
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
        if(!user){
            navigate('/login')
        }
    },[])

    useEffect(()=>{
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages((prev)=>[...prev, arrivalMessage])
    },[arrivalMessage, currentChat])

    useEffect(()=>{
        socket.current.emit('addUser', user?._id)
        socket.current.on('getUsers', users=>{
        })
    },[user])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await getConversation(user?._id)
            setConversation(res)

            const res1 = await getMessage(currentChat?._id)
            setMessages(res1)
        }
        fetchData()
    },[currentChat])
    const handleSend = async (e)=>{
        e.preventDefault()
        const message={
            sender: user?._id,
            text: newMessage,
            conversationId: currentChat?._id
        }
        const res = await postMessage(message)
        setMessages([...messages, res])
        setNewMessage('')

        const receiverId = currentChat.members.find(member=> member !== user?._id)

        socket.current.emit('sendMessage',{
            senderId: user?._id,
            receiverId,
            text: newMessage
        })
    }

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:'smooth'})
    },[messages])

    const handleConversation = async (friend)=>{
        const data={
            senderId: user?._id,
            receiverId: friend
        }
        const res = await postConversation(data)
        setCurrentChat(res)
    }

  return (
    <div className='chat-container'>
        <div className="chat-upper-parent">
        <div className="chat-upper">
        <p style={{fontWeight:'500'}}>All Friends</p>
            <div className="chat-flex">
            {
                user?.followings?.map((friend, index)=>(
                    <div key={index} onClick={()=>handleConversation(friend)}>
                        <EachChatPerson friend={friend}/>
                    </div>
                    ))
            }
            </div>
            <p style={{fontWeight:'500', padding:'0', margin:'0'}}>Recent Conversations</p>
            <div className="chat-flex">
            {
                conversation?.map((con, index)=>(
                    <div key={index} onClick={()=>setCurrentChat(con)}>
                        <EachConversation con={con} user={user}/>
                    </div>
                    ))
            }
            </div>
        </div>

        </div>

        <div className="chat-lower">
            
            {
                currentChat?
                <>
                    <div className="chat-chatting-person">
                        <ChatNameDp currentChat={currentChat} user={user}/>
                    </div>
                <div className="chatBoxTop">
                    {
                        messages?.map((message, index)=>(
                            <div ref={scrollRef}>
                                <Messages key={index} message={message} own={message?.sender === user?._id}/>
                            </div>
                        ))
                    }
                    
                </div>
                </>:<p style={{margin:'50px 0 350px 0', color:'#D4D4D4', fontSize:'18px'}}>Send a message to start a conversation</p>
            }
            <div className="chat-type-message">
                <textarea onChange={(e)=>setNewMessage(e.target.value)} value={newMessage} name="" id="" cols="30" rows="1" placeholder='Type Your Message...'></textarea>
                <SendRoundedIcon className='chat-send-button' onClick={handleSend} style={{fontSize:'25px', backgroundColor:'#4E426D', padding:'5px', borderRadius:'100%', color:'#EFF3FA', cursor:'pointer'}} />
            </div>
        </div>
    </div>
  )
}
