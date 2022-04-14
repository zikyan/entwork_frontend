import {useState, useEffect} from 'react'
import zikyan from '../../images/zikyan_dp.jpg';
import { getUserById } from '../../service/api';

export default function EachChatPerson({friend}) {
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
        <img style={{zIndex:'1'}} className='chat-user-dp' src={user?.profilePicture} alt="" />
        <div className="chat-below-image">
            <p>{user?.first}</p>
        </div>
    </div>
  )
}
