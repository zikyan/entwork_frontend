import { useState, useEffect } from 'react'
import { getUserById } from '../../service/api'

export default function CommentUserName({comment}) {
    const [username, setUsername] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const newUser = await getUserById(comment)
            setUsername(newUser)
        }
        fetchData()
    },[])
  return (
    <div>
      <p style={{fontWeight:'600'}}>
      {username?.first?.charAt(0).toUpperCase() + username?.first?.slice(1)} {username?.last?.charAt(0).toUpperCase() + username?.last?.slice(1)}
      </p>
      </div>
  )
}
