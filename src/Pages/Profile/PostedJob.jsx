import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'

export default function PostedJob({job, user, darkMode}) {
  return (
    <div style={{padding:'20px 0 0 0', margin:'0px'}} className={`work-box-design-lower ${darkMode?"changeModeRec":""}`}>
        <div style={{border:'1px solid #d4d4d4', padding:'20px', borderRadius:'2px'}} className="work-upper3">
            <div className="work-post1">
                <div className="work-post-left">
                        <Link to={ `/profile/${user?.username}`}><img className='work-post-dp' src={user?.profilePicture} alt="" /></Link>
                        <div className="work-post-username">
                            <Link to={ `/profile/${user?.username}`} style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>{user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}</Link>
                            <div className="work-post-belowname">
                                <p className='work-post-time-tag'>#{job?.tag},&nbsp;</p>
                                <p className='work-post-time-tag'>{format(job.createdAt)}</p>
                            </div>
                        </div>
                </div>
            </div>
            <Link to='/post' className={`work-post-caption ${darkMode?"changeModeRec":""}`}><p style={{marginTop:'10px'}}>{job?.caption}</p></Link>

                <div className={`${darkMode?"darkwork-workpost":"work-workpost"}`}>
                    {/* <img className='work-workpost-image' src={cat} alt="" /> */}
                    <p>{job?.des}</p>
                </div>
        </div>
        </div>
  )
}
