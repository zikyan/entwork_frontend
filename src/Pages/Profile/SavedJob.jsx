import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserById, deleteSavedJob } from '../../service/api';
import { useSelector } from 'react-redux';

export default function SavedJob({darkMode, job}) {
    const { user }= useSelector((state)=>state.auth)
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
    const [userById, setUserById] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await getUserById(job.user)
            setUserById(res)
        }
        fetchData()
    },[])
    const handleDeleteSavedJob = async (jobId)=>{
        await deleteSavedJob(jobId)
        window.location.reload(false);
      }
  return (
    <div style={{padding:'20px 0 0 0', margin:'0px'}} className={`work-box-design-lower ${darkMode?"changeModeRec":""}`}>
        <div style={{border:'1px solid #d4d4d4', padding:'20px', borderRadius:'2px'}} className="work-upper3">
            <div className="work-post1">
                <div className="work-post-left">
                        <img className='work-post-dp' src={userById?.profilePicture || defaultImage} alt="" />
                        <div className="work-post-username">
                        <p style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>
                            {userById?.first?.charAt(0).toUpperCase() + userById?.first?.slice(1)} {userById?.last?.charAt(0).toUpperCase() + userById?.last?.slice(1)}
                        </p>
                            <div className="work-post-belowname">
                                <p className='work-post-time-tag'>#{job?.tag},&nbsp;</p>
                                <p className='work-post-time-tag'>{job?.category},&nbsp;</p>
                                <p className='work-post-time-tag'>Saved Job</p>
                            </div>
                        </div>
                </div>
                    <div className="work-post-right">
                        <button className='work-button-save' onClick={()=>handleDeleteSavedJob(job?._id)}>Unsave</button>
                    </div>
            </div>
            <Link to='/work' className={`work-post-caption ${darkMode?"changeModeRec":""}`}><p style={{marginTop:'10px'}}>{job?.caption}</p></Link>

                <div className={`${darkMode?"darkwork-workpost":"work-workpost"}`}>
                    {/* <img className='work-workpost-image' src={cat} alt="" /> */}
                    <p>{job?.des}</p>
                </div>

                {
                    user?._id === userById?._id? '' :
                    <div className="work-workpost-below">
                        <button className='work-start-chat-button'>Start Chat</button>
                    </div>
                }

                
        </div>
        </div>
  )
}
