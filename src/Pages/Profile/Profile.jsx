import {useState, useEffect } from 'react';
import './profile.css';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom';
import { getUserByUsername, getPostById, followUser, unfollowUser, getCommentByUsername, getJobByUser, deletePost, getSavePost, getSaveJob, followUserOne, checkFollow, unFollowUserOne, getUserByFollow, getUserByFollowFriend } from '../../service/api';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { useSelector } from 'react-redux';
import UserComments from './UserComments';
import PostedJob from './PostedJob';
import Friends from './Friends';
import SavedExtra from './SavedExtra';
import SavedJob from './SavedJob';
import WarningText from './WarningText';
import { toast } from 'react-toastify';

export default function Profile({darkMode}) {
  const {name}=useParams()
  const [username, setUsername] = useState()
  const [posts, setPosts] = useState([])
  const { user }= useSelector((state)=>state.auth)
  const [allComments, setAllComments] = useState()
  const [postedJob, setPostedJob] = useState()
  const [temp, setTemp] = useState('')
  const [save, setSave] = useState()
  const [savedJob, setSavedJob] = useState()
  const [showComponent, setShowComponent] = useState(true)
  // const [followed, setFollowed] = useState(user?.followings.includes(username?._id))
  const [followed, setFollowed] = useState()
  const [friendFollow, setFriendFollow] = useState()
  

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
  const defaultCover="https://res.cloudinary.com/zikcover/image/upload/v1651253301/woguznjd3fvl35ssktz1.jpg"
  useEffect(()=>{
    const fetchData = async ()=>{

        

        // comments logic
        const allComments = await getCommentByUsername(name)
        setAllComments(allComments)

        // posted jobs logic

        const jobs = await getJobByUser(user?._id)
        setPostedJob(jobs)

        // get all saved posts
    
        const savedPosts = await getSavePost(user?._id)
        setSave(savedPosts)

        // get all saved jobs

        const savedJobs = await getSaveJob(user?._id)
        setSavedJob(savedJobs)

        const tempFriend = await getUserByFollowFriend(user?._id)
        setFriendFollow(tempFriend)

        
    }
    fetchData()
  },[])
  // console.log(followed)
  useEffect(()=>{
    const fetchFollowed = async ()=>{
      
    // follow/unfollow logic
    const userByName = await getUserByUsername(name)
    const post = await getPostById(userByName?._id)
    const userFromFollow = await getUserByFollow(userByName?._id)
    setUsername(userByName)
    setPosts(post)

        const fol = await checkFollow(user?._id)
        setFollowed(fol?.followings.includes(userFromFollow?.user))

      //   if(followed === false){
      //     setFollowed(true)
      // }else{
      //     setFollowed(false)
      // } 
      console.log(followed)
    }
    fetchFollowed()
        
  },[temp])
  // console.log(user?.followings.includes(username?._id))

  const handleFollowButton = async ()=>{
    
      if(followed){
        await unFollowUserOne(username?._id, {user:user?._id})
      }else{
        await followUserOne(username?._id, {user:user?._id})
      }
      setFollowed(!followed)
      
  }
  const handleDeletePost = async (postId)=>{
    await deletePost(postId)
    toast.success("Post Deleted Successfully")
    setTemp('Deleted Successfully')
  }

  useEffect(()=>{
    setTimeout(()=>{
      setShowComponent(false)
    },5000)
  },[])
  // console.log(followed)
  return (
    <div>
     { user?._id === username?._id && username?.warning>0?
      showComponent?<WarningText user={user} />:''
      :''
     }
    <div className="profile-parent">
        <div className="profile-cover-container">
            <img className='profile-cover-img' src={username?.coverPicture || defaultCover} alt="" />
            <img className='profile-display-img' src={username?.profilePicture || defaultImage} alt="" />
            <div className='profile-follow-text'>
              <p className='profile-name-text'>{username?.first?.charAt(0).toUpperCase() + username?.first?.slice(1)} {username?.last?.charAt(0).toUpperCase() + username?.last?.slice(1)} </p>
            </div>
            <p className='profile-bio-text' >{username?.bio}</p>
            {
                user? // so that no guest can see follow/unfollow button
                user?.username !== username?.username ? // same cannot follow/unfollow himself
                // followed===true?
                <button onClick={handleFollowButton} className='profile-follow-button'><p>&nbsp;{followed===true ? 'Unfollow' : 'Follow'}</p></button>
                // :<button onClick={handleFollowButton} className='profile-follow-button'><p>&nbsp;Follow</p></button>
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
                    Skills
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
                            <img className='mainbar-post-dp' src={username?.profilePicture || defaultImage} alt="" />
                            <div className="mainbar-post-username">
                                <p style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>
                                    {username?.first?.charAt(0).toUpperCase() + username?.first?.slice(1)} {username?.last?.charAt(0).toUpperCase() + username?.last?.slice(1)}
                                    </p>
                                <div className="mainbar-post-belowname">
                                    <p className='mainbar-post-time-tag'>#{post?.tag},&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>{post?.category},&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>{format(post?.createdAt)}</p>
                                </div>
                            </div>
                    </div>
                    {
                      user?.username === username?.username ?
                      <>
                      <div className="mainbar-post-right">
                            <Link to={`/editpost/${post?._id}`}><button className='mainbar-button-save'>Edit</button></Link>
                            <button onClick={()=>handleDeletePost(post?._id)} className='mainbar-button-save mainbar-button-download'>Delete</button>
                      </div>
                      </>
                      :''
                    }
                </div>
                {/* <Link to={`/post/${post?._id}`} className={`mainbar-post-caption ${darkMode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>{post.text}</p></Link> */}

                    {/* <div className={`mainbar-mainpost ${darkMode?"changeModelite":""}`}>
                        <img className='mainbar-mainpost-image' src={post?.img} alt="" />
                    </div> */}

                    <div className="eachpost-eachpost-center">
                        
                        <div className={`mainbar-mainpost ${darkMode?"changeModelite":""}`}>
                            <Link to={`/post/${post?._id}`} className={`mainbar-post-caption ${darkMode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>{post?.text}</p></Link>
                            {/* <Link to={`/post/${post?._id}`}><img className='mainbar-mainpost-image' src={post?.img} alt="" /></Link> */}
                            {
                              post?.img?.substr(post?.img.length - 4) === '.mp4'?
                              <video width="580px" height="550px" style={{borderRadius:'5px', marginTop:'20px'}} controls>
                                <source src={post?.img} type="video/mp4"/>
                              </video>
                              :
                              <Link to={`/post/${post?._id}`}><img className='mainbar-mainpost-image' src={post?.img} alt="" /></Link>
                            }
                        </div>
                        
                    </div>
                    
                    {/* <div className="mainbar-mainpost-below">
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
                    </div> */}
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
      save?.map((post)=>(
        <SavedExtra post={post} darkMode={darkMode} />
      )):''
    }

    {
      toggleState===4?
      postedJob?.map((job)=>(
        <PostedJob key={job._id} job={job} darkMode={darkMode}/>
      ))
      :''
    }

    {
      toggleState===5?
      savedJob?.map((job)=>(
        <SavedJob key={job._id} job={job} darkMode={darkMode}/>
      ))
      :''
    }

    {
      toggleState===6?
      friendFollow?.followings?.map((friend)=>(
        <Friends key={user?._id}  friend={friend}/>
      ))
      // <p>{user?.fol}</p>
      :''
    }

    {
      user?
      toggleState===7?
      <p>{username?.about}</p>
      :''
      :''
    }
    </div>
    </div>
  )
}
