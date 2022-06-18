import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format } from 'timeago.js';
import { getUserById, deleteJob } from '../../service/api';

export default function AdminEachJob({darkMode, job}) {
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
    const [user, setUser] = useState()

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await getUserById(job.user)
            setUser(res)
        }
        fetchData()
    },[])
    const handleDeleteJob = async (id)=>{
        await deleteJob(id)
        toast.success("Job Deleted Successfully")
        window.location.reload(false)
      }
  return (
    <div className={`work-box-design-lower ${darkMode?"changeModeRec":""}`}>
        <div className="work-upper3">
            <div className="work-post1">
                <div className="work-post-left">
                        <Link to={ `/profile/${user?.username}`}><img className='work-post-dp' src={user?.profilePicture || defaultImage} alt="" /></Link>
                        <div className="work-post-username">
                            <Link to={ `/profile/${user?.username}`} style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>{user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}</Link>
                            <div className="work-post-belowname">
                                <p className='work-post-time-tag'>#{job?.tag},&nbsp;</p>
                                <p className='work-post-time-tag'>{format(job.createdAt)}</p>
                            </div>
                        </div>
                </div>
                <div className="mainbar-post-right">
                <p style={{textDecoration:'none', color:"black", fontSize:'15px', marginRight:'20px'}}>Job Reports: {job?.report}</p>
                    <button onClick={()=>handleDeleteJob(job?._id)} className='mainbar-button-save mainbar-button-download'>Delete</button>
              </div>
            </div>
            <Link to='/post' className={`work-post-caption ${darkMode?"changeModeRec":""}`}><p style={{marginTop:'10px'}}>{job?.caption}</p></Link>

                <div className={`${darkMode?"darkwork-workpost":"work-workpost"}`}>
                    <p>{job?.des}</p>
                </div>
        </div>
        </div>
  )
}
