import { useState, useEffect } from "react"
import { getUserById } from "../../service/api"


export default function EachConversation({con, user}) {
    const friendId = con.members.find((m)=>m !== user._id)
    const [getFriend, setFriend] = useState()
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"

    useEffect(()=>{
        const fetchData = async ()=>{
            const getUser = await getUserById(friendId)
            setFriend(getUser)
        }
        fetchData()
    },[con, user])
  return (
    <div className="chat-single-friend">
        <img style={{zIndex:'1'}} className='chat-user-dp' src={getFriend?.profilePicture || defaultImage} alt="" />
        <div className="chat-below-image">
            <p>{getFriend?.first}</p>
        </div>
    </div>
  )
}
