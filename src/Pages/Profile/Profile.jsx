import {useState, useEffect } from 'react';
import './profile.css';
import cover from '../../images/cover.jpg';
import zikyan from '../../images/zikyan_dp.jpg';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom';
import { getUserByUsername, getPostById, followUser, unfollowUser, getCommentByUsername, getJobByUser } from '../../service/api';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { useSelector } from 'react-redux';
import UserComments from './UserComments';
import PostedJob from './PostedJob';

export default function Profile({darkMode}) {
  const {name}=useParams()
  const [username, setUsername] = useState()
  const [posts, setPosts] = useState([])
  const { user }= useSelector((state)=>state.auth)
  const [followed, setFollowed] = useState()
  const [allComments, setAllComments] = useState()
  const [postedJob, setPostedJob] = useState()
  

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
  useEffect(()=>{
    const fetchData = async ()=>{

        // comments logic
        const allComments = await getCommentByUsername(name)
        setAllComments(allComments)

        // posted jobs logic

        const jobs=await getJobByUser(user?._id)
        setPostedJob(jobs)


      // follow/unfollow logic
      const userByName = await getUserByUsername(name)
      const post = await getPostById(userByName?._id)
      setUsername(userByName)
      setPosts(post)
        if(await (user?.followings.includes(userByName?._id)) === true){
            setFollowed(true)
        }else{
            setFollowed(false)
        }
    }
    fetchData()
  },[])

  const handleFollowButton = async ()=>{
      if(followed){
        await unfollowUser(username?._id, {user:user?._id})
        
      }else{
        await followUser(username?._id, {user:user?._id})
      }
      setFollowed(!followed)
  }
  return (
    <div>
    <div className="profile-parent">
        <div className="profile-cover-container">
            <img className='profile-cover-img' src={cover} alt="" />
            <img className='profile-display-img' src={username?.profilePicture || defaultImage} alt="" />
            <div className='profile-follow-text'>
              <p className='profile-name-text'>{username?.first?.charAt(0).toUpperCase() + username?.first?.slice(1)} {username?.last?.charAt(0).toUpperCase() + username?.last?.slice(1)} </p>
            </div>
            <p className='profile-bio-text' >{username?.bio}</p>
            {
                user? // so that no guest can see follow/unfollow button
                user?.username !== username?.username ? // same cannot follow/unfollow himself
                followed===true?
                <button onClick={handleFollowButton} className='profile-follow-button'><p>&nbsp;Unfollow</p></button>
                :<button onClick={handleFollowButton} className='profile-follow-button'><p>&nbsp;Follow</p></button>
                : '':''
            }
            {
              user && user?._id===username?._id?
              <Link style={{textDecoration:'none'}} to={`/editprofile/${name}`}><button className='profile-edit-button'><EditIcon style={{fontSize:'20px',marginRight:'5px', color:`${darkMode?"#fff":''}`}}/>Edit Profile</button></Link>
              :''
            }
            {/* <li className='profile-li-active'>All Posts</li> */}
            <div className="profile-ul-container">
                <ul className='profile-ul'>
                  
                    <li className={toggleState === 1 ? "profile-li-active" : "profile-li-nonactive"}
                    onClick={() => toggleTab(1)}>
                    All Posts
                    </li>

                    <li className={toggleState === 2 ? "profile-li-active" : "profile-li-nonactive"}
                    onClick={() => toggleTab(2)}>
                    Comments
                    </li>
                    { user?.username === username?.username ?
                      <>
                        <li className={toggleState === 3 ? "profile-li-active" : "profile-li-nonactive"}
                        onClick={() => toggleTab(3)}>
                        Saved Posts
                        </li>
                        
                        <li className={toggleState === 4 ? "profile-li-active" : "profile-li-nonactive"}
                        onClick={() => toggleTab(4)}>
                        Posted Jobs
                        </li>

                        <li className={toggleState === 5 ? "profile-li-active" : "profile-li-nonactive"}
                        onClick={() => toggleTab(5)}>
                        Saved Jobs
                        </li>

                        <li className={toggleState === 6 ? "profile-li-active" : "profile-li-nonactive"}
                        onClick={() => toggleTab(6)}>
                        Friends
                        </li>
                      </>
                      :''
                    }

                    <li className={toggleState === 7 ? "profile-li-active" : "profile-li-nonactive"}
                    onClick={() => toggleTab(7)}>
                    About
                    </li>

                </ul>
            </div>
        </div>
    </div>
    <div className='profile-box-design'>
    {
    user?
    toggleState===1?
      posts?.map((post)=>(
        <div key={post._id} className="mainbar-upper3">
                <div className="mainbar-post1">
                    <div className="mainbar-post-left">
                            <img className='mainbar-post-dp' src={username?.profilePicture} alt="" />
                            <div className="mainbar-post-username">
                                <p style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>
                                    {username?.first?.charAt(0).toUpperCase() + username?.first?.slice(1)} {username?.last?.charAt(0).toUpperCase() + username?.last?.slice(1)}
                                    </p>
                                <div className="mainbar-post-belowname">
                                    <p className='mainbar-post-time-tag'>#{post?.tag},&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>{format(post?.createdAt)}</p>
                                </div>
                            </div>
                    </div>
                        <div className="mainbar-post-right">
                            <button className='mainbar-button-save'>Save</button>
                            <button className='mainbar-button-save mainbar-button-download'>Download</button>
                        </div>
                </div>
                <Link to={`/post/${post?._id}`} className={`mainbar-post-caption ${darkMode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>{post.text}</p></Link>

                    <div className={`mainbar-mainpost ${darkMode?"changeModelite":""}`}>
                        <img className='mainbar-mainpost-image' src={post?.img} alt="" />
                    </div>
                    <div className="mainbar-mainpost-below">
                            <div className="mainbar-mainpost-below-left">
                                <div className="mainbar-mainpost-button-flex-parent">
                                    <button> <ArrowUpwardIcon /> 1.5k</button>
                                    <button><ArrowDownwardIcon />40</button>
                                    <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                                </div>
                            </div>
                            <div className="mainbar-mainpost-below-right">
                                <button className='mainbar-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                                <button className='mainbar-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                                <button className='mainbar-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                            </div>
                    </div>
                </div>
      )):''
    :<p style={{paddingTop:'10px'}}>Please Login First <Link to='/login'>Login</Link></p>
    }
    {
      user?
      toggleState===2?
      <div style={{paddingTop:'1px'}}>{
        allComments?.map((comment)=>(
          <UserComments key={comment._id} comment={comment} />
        ))
      }
      </div>
      :''
      :''
    }

    {
      toggleState===3?
      <p>Saved Posts Section</p>
      :''
    }

    {
      toggleState===4?
      postedJob.map((job)=>(
        <PostedJob key={job._id} job={job} user={user} darkMode={darkMode}/>
      ))
      :''
    }

    {
      toggleState===5?
      <p>Saved Jobs Section</p>
      :''
    }

    {
      toggleState===6?
      <p>Friends Section</p>
      :''
    }

    {
      user?
      toggleState===7?
      <p>About Section</p>
      :''
      :''
    }
    </div>
    </div>
  )
}
