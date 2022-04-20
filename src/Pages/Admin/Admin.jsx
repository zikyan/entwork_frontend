import { useState, useEffect } from "react"
import './admin.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserById, getAllUser, getAllPostAdmin, getAllComment, getAllJob } from "../../service/api";
import { Link } from "react-router-dom";
import { format } from 'timeago.js';
import AdminPostUsername from "./AdminPostUsername";
import AdminPostDp from "./AdminPostDp";
import CommentUserName from "../../Components/EachComment/CommentUserName";
import CommentUserImage from "../../Components/EachComment/CommentUserImage";
import AdminEachJob from '../Admin/AdminEachJob'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Admin({darkMode}) {
  const { user }=useSelector((state)=>state.auth)
  const [toggleState, setToggleState] = useState(1);
  const [allUser, setAllUser] = useState()
  const [allPost, setAllPost] = useState()
  const [allComment, setAllComment] = useState()
  const [allJob, setAllJob] = useState()
  const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const navigate=useNavigate()
  useEffect(()=>{
      const fetchData = async () => {
        if(user){
            const adminUser = await getUserById(user?._id)
            if(adminUser?.username !== 'zikyan786'){
                navigate('/')
            }
        }
        if(!user){
            navigate('/')
        }
        // Get All Users

        const getUsers = await getAllUser()
        setAllUser(getUsers)

        // Get All Posts

        const getPosts = await getAllPostAdmin()
        setAllPost(getPosts)

        // Get All Comments

        const getComments = await getAllComment()
        setAllComment(getComments)

        // Get All Jobs

        const getJobs = await getAllJob()
        setAllJob(getJobs)
      }
      fetchData()
  },[user,navigate])

  return (
    <>
    <div className="admin-panel-heading">
      <p>Admin Panel Dashboard</p>
    </div>
    <div className="profile-ul-container">
                <ul className='profile-ul'>
                  
                    <li className={toggleState === 1 ? "profile-li-active" : "profile-li-nonactive"}
                    onClick={() => toggleTab(1)}>
                    All Users
                    </li>

                    <li className={toggleState === 2 ? "profile-li-active" : "profile-li-nonactive"}
                    onClick={() => toggleTab(2)}>
                    All Posts
                    </li>

                    <li className={toggleState === 3 ? "profile-li-active" : "profile-li-nonactive"}
                    onClick={() => toggleTab(3)}>
                    All Comments
                    </li>
                    
                    <li className={toggleState === 4 ? "profile-li-active" : "profile-li-nonactive"}
                    onClick={() => toggleTab(4)}>
                    All Jobs
                    </li>

                </ul>
            </div>

    <div>
    {
      toggleState===1?
      allUser?.map((user, index)=>(
        <div key={index}>
          {
            user?.username !== 'zikyan786'?
            <div className="admin-vertical-dots admin-box-design">
              <div className="admin-alluser">
              <Link to={`/profile/${user?.username}`}><img className='mainbar-post-dp' src={user?.profilePicture || defaultImage} alt="" /></Link>
              <Link style={{textDecoration:'none', color:"black",fontWeight:'600'}} to={`/profile/${user?.username}`}>
                {user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}
              </Link>
            </div>
              <MoreVertIcon className="admin-vertical-dots-icon" />
            </div>
            :''
          }
        </div>
      ))
      :''
    }
    {
      toggleState===2?
      allPost?.map((post)=>(
        <div key={post._id} className="admin-box-design-lower">
                <div className="mainbar-post1">
                    <div className="mainbar-post-left">
                            <AdminPostDp post={post} />
                            <div className="mainbar-post-username">
                                <AdminPostUsername post={post} />
                                <div className="mainbar-post-belowname">
                                    <p className='mainbar-post-time-tag'>#{post?.tag},&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>{format(post?.createdAt)}</p>
                                </div>
                            </div>
                    </div>
                        <div className="mainbar-post-right">
                          <MoreVertIcon className="admin-vertical-dots-icon" />
                        </div>
                </div>
                <Link to={`/post/${post?._id}`} className={`mainbar-post-caption ${darkMode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>{post?.text}</p></Link>

                    <div className={`mainbar-mainpost ${darkMode?"changeModelite":""}`}>
                        <img className='mainbar-mainpost-image' src={post?.img} alt="" />
                    </div>
        </div>
      ))
      :''
    }

    {
      toggleState===3?
      allComment?.map((comment, index)=>(
        <div key={comment?.commentText} style={{marginTop:'20px'}} className='admin-comment-box-design admin-comment-post'>
          <div className="admin-comment-people admin-allcomment ">
                    <CommentUserImage comment={comment?.user} />
                        <div className="comment-post-username">
                            <div className="comment-name-time-flex">
                                <CommentUserName comment={comment?.user} />
                                <p className='comment-post-time'>&nbsp;{format(comment?.createdAt)}</p>
                            </div>
                                <p className='comment-people-text'>{comment?.commentText}</p>
                        </div>
                        </div>
                        <MoreVertIcon className="admin-comment-vertical-dots-icon" />
                    </div>
      ))
      :''
    }

    {
      toggleState===4?
      allJob?.map((job, index)=>(
        <div key={index}>
          <AdminEachJob darkMode={darkMode} job={job} />
        </div>
      ))
      :''
    }
    </div>
    </>
  )
}
