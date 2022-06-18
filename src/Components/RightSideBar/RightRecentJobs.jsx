import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserById } from '../../service/api';
import { format } from 'timeago.js';

export default function RightRecentJobs({darkMode, job}) {
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
  const [user, setUser] = useState()
  const size=3
  useEffect(()=>{
    const fetchData = async ()=>{

      const users = await getUserById(job?.user)
      setUser(users)
    }
    fetchData()
  },[])
  return (
    <>
<div className={`rightsidebar-upper3 ${darkMode?"changeModeside2":""}`}>
        <div className="rightsidebar-recent-jobs-card">
        <div className="rightsidebar-post-left">
        <a href={ `/profile/${user?.username}`}><img className='rightsidebar-post-dp' src={user?.profilePicture || defaultImage} alt="" /></a>
              <div className="rightsidebar-post-username">
              <a href={ `/profile/${user?.username}`} style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>{user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}</a>
                  <div className="rightsidebar-post-belowname">
                      {/* <p className='rightsidebar-post-tag'>#{job?.tag}&nbsp;</p> */}
                      <p className='work-post-time-tag'>{job?.category},&nbsp;</p>
                      <p className='rightsidebar-post-time'>{format(job?.createdAt)}</p>
                  </div>
              </div>
          </div>
          <a style={{textDecoration:'none', color:'#000'}} href={`/job/${job?._id}`}>
            <p className={` rightsidebar-recent-jobs-description ${darkMode?"recent-jobs-final-dark":""}`}>{job?.des}</p>
          </a>
        </div>
      </div>
    
    
      </>
  )
}
