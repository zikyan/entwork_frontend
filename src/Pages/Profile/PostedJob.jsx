import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import { getUserById, deleteJob } from '../../service/api'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function PostedJob({job, darkMode}) {
    const {user}=useSelector((state)=>state.auth)
    const [freshUser, setFreshUser] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const fresh = await getUserById(user?._id)
            setFreshUser(fresh)
        }
        fetchData()
    },[])
    const handleDeleteJob = async (jobId)=>{
        await deleteJob(jobId)
        toast.success("Job Deleted Successfully")
        window.location.reload(false);
      }
  return (
    <div style={{padding:'20px 0 0 0', margin:'0px'}} className={`work-box-design-lower ${darkMode?"changeModeRec":""}`}>
        <div style={{border:'1px solid #d4d4d4', padding:'20px', borderRadius:'2px'}} className="work-upper3">
            <div className="work-post1">
                <div className="work-post-left">
                        <img className='work-post-dp' src={freshUser?.profilePicture} alt="" />
                        <div className="work-post-username">
                        <p style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>
                            {user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}
                        </p>
                            <div className="work-post-belowname">
                                <p className='work-post-time-tag'>#{job?.tag},&nbsp;</p>
                                <p className='work-post-time-tag'>{job?.category},&nbsp;</p>
                                <p className='work-post-time-tag'>Posted Job</p>
                            </div>
                        </div>
                </div>
                <div className="mainbar-post-right">
                            <Link to={`/editjob/${job?._id}`}><button className='mainbar-button-save'>Edit</button></Link>
                            <button onClick={()=>handleDeleteJob(job?._id)} className='mainbar-button-save mainbar-button-download'>Delete</button>
                        </div>
            </div>
            <Link to={`/job/${job?._id}`} className={`work-post-caption ${darkMode?"changeModeRec":""}`}><p style={{marginTop:'10px'}}>{job?.caption}</p></Link>
            <Link style={{textDecoration:'none', color:'#000'}} to={`/job/${job?._id}`}>
                <div className={`${darkMode?"darkwork-workpost":"work-workpost"}`}>
                    {/* <img className='work-workpost-image' src={cat} alt="" /> */}
                    <p>{job?.des}</p>
                </div>
                </Link>
        </div>
        </div>
  )
}
