import { useState, useEffect } from 'react';
import zikyan from '../../images/zikyan_dp.jpg';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { getUserById } from '../../service/api';

export default function EachJob({darkMode, job}) {
    const [user, setUser] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await getUserById(job.user)
            setUser(res)
        }
        fetchData()
    },[])
  return (
    <div className={`work-box-design-lower ${darkMode?"changeModeRec":""}`}>
        <div className="work-upper3">
            <div className="work-post1">
                <div className="work-post-left">
                        <Link to={ `/profile/${user?.username}`}><img className='work-post-dp' src={user?.profilePicture} alt="" /></Link>
                        <div className="work-post-username">
                            <Link to={ `/profile/${user?.username}`} style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>{user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}</Link>
                            <div className="work-post-belowname">
                                <p className='work-post-time-tag'>#{job?.tag},&nbsp;</p>
                                <p className='work-post-time-tag'>{job?.category},&nbsp;</p>
                                <p className='work-post-time-tag'>{format(job.createdAt)}</p>
                            </div>
                        </div>
                </div>
                    <div className="work-post-right">
                        <button className='work-button-save'>Save</button>
                    </div>
            </div>
            <p className={`work-post-caption ${darkMode?"changeModeRec":""}`} style={{marginTop:'10px'}}>{job?.caption}</p>

                <div className={`${darkMode?"darkwork-workpost":"work-workpost"}`}>
                    {/* <img className='work-workpost-image' src={cat} alt="" /> */}
                    <p>{job?.des}</p>
                </div>
                <div className="work-workpost-below">
                    <button className='work-start-chat-button'>Start Chat</button>
                </div>
        </div>
        </div>
  )
}
