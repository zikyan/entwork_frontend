import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { getUserById, saveJob, reportJob, addJobLike } from '../../service/api';
import { useSelector } from 'react-redux';

export default function EachJob({darkMode, job}) {
    const { user }= useSelector((state)=>state.auth)
    const [like,setLike] = useState(job?.count)
    const [isLiked,setIsLiked] = useState(false)
    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
    const [userById, setUserById] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await getUserById(job.user)
            setUserById(res)
        }
        fetchData()
    },[])
    const saveClick = async (e)=>{
        const jobData = {
            user: e?.user,
            saved: user,
            job:e?._id,
            caption: e?.caption,
            tag: e?.tag,
            des: e?.des,
            img: e?.img,
            category:e?.category
          }
        await saveJob(jobData)
    }
    useEffect(() => {
        setIsLiked(job?.vote.includes(user?._id));
      }, [user?._id, job?.vote]);
  
      const likeHandler = async (id)=>{
        await addJobLike(id,{userId:user?._id})
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
      }
    const handleReportJob = async (e) =>{
        await reportJob(e,{currentUser:user?._id})
        window.location.reload(false)
    }
  return (
    <div className={`work-box-design-lower ${darkMode?"changeModeRec":""}`}>
        <div className="work-upper3">
            <div className="work-post1">
                <div className="work-post-left">
                        <Link to={ `/profile/${userById?.username}`}><img className='work-post-dp' src={userById?.profilePicture || defaultImage} alt="" /></Link>
                        <div className="work-post-username">
                            <Link to={ `/profile/${userById?.username}`} style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>{userById?.first?.charAt(0).toUpperCase() + userById?.first?.slice(1)} {userById?.last?.charAt(0).toUpperCase() + userById?.last?.slice(1)}</Link>
                            <div className="work-post-belowname">
                                <p className='work-post-time-tag'>#{job?.tag},&nbsp;</p>
                                <p className='work-post-time-tag'>{job?.category},&nbsp;</p>
                                <p className='work-post-time-tag'>{format(job.createdAt)}</p>
                            </div>
                        </div>
                </div>
                    <div style={{display:'flex', flexDirection:'column'}} className="work-post-right">
                        <button style={{width:'90px'}} className='work-button-save' onClick={()=>saveClick(job)}>Save</button>
                        {
                            job?.reportuser.includes(user?._id)? '':
                            <button style={{marginTop:'10px'}} className='work-button-save' onClick={()=>handleReportJob(job?._id)}>Report</button>
                        }
                    </div>
            </div>
            <p className={`work-post-caption ${darkMode?"changeModeRec":""}`} style={{marginTop:'10px'}}>{job?.caption}</p>

                <div className={`${darkMode?"darkwork-workpost":"work-workpost"}`}>
                    {/* <img className='work-workpost-image' src={cat} alt="" /> */}
                    <p>{job?.des}</p>
                </div>
                <div  className="mainbar-mainpost-below">
                    <div style={{display:'flex', alignItems:'flex-start'}} className="mainbar-mainpost-below-left">
                        <div className="mainbar-mainpost-button-flex-parent">
                        <p style={{marginTop:'2px'}} className='like-count'>{ like }</p>
                                    <button style={{width:'80px', marginLeft:'10px'}} onClick={()=>likeHandler(job?._id)}>
                                      { isLiked? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                    </button>
                        </div>
                    </div>
                </div>
                <div className="work-workpost-below">
                    <button className='work-start-chat-button'>Start Chat</button>
                </div>
        </div>
        </div>
  )
}
