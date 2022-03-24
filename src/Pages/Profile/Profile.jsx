import {useState, useEffect } from 'react';
import './profile.css';
import cover from '../../images/cover.jpg';
import zikyan from '../../images/zikyan_dp.jpg';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom';
import { getUserByUsername, getPostById } from '../../service/api';
import cat from '../../images/cat-post.jpg';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

export default function Profile(props) {
  const {name}=useParams()
  const [username, setUsername] = useState()
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      const user = await getUserByUsername(name)
      const post = await getPostById(user._id)
      setUsername(user)
      setPosts(post)
    }
    fetchData()
  },[])
  
  return (
    <div>
    <div className="profile-parent">
        <div className="profile-cover-container">
            <img className='profile-cover-img' src={cover} alt="" />
            <img className='profile-display-img' src={zikyan} alt="" />
            <div className='profile-follow-text'>
              <p className='profile-name-text'>{username?.first?.charAt(0).toUpperCase() + username?.first?.slice(1)} {username?.last?.charAt(0).toUpperCase() + username?.last?.slice(1)} </p>
            </div>
            <p className='profile-bio-text' >Dirty bit of sarcasm</p>
            <button className='profile-edit-button'><EditIcon style={{fontSize:'20px',marginRight:'5px', color:`${props.darkmode?"#fff":''}`}}/>Edit Profile</button>
            <div className="profile-ul-container">
                <ul className='profile-ul'>
                    <li className='profile-li-active'>All Posts</li>
                    <li>Comments</li>
                    <li>Saved Posts</li>
                    <li>Posted Jobs</li>
                    <li>Saved Jobs</li>
                    <li>Friends</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    </div>
    <div className='profile-box-design'>
    {
      posts.map((post)=>(
        <div key={post._id} className="mainbar-upper3">
                <div className="mainbar-post1">
                    <div className="mainbar-post-left">
                            <Link to='/profile'><img className='mainbar-post-dp' src={zikyan} alt="" /></Link>
                            <div className="mainbar-post-username">
                                <p style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}}>
                                    {username.first?.charAt(0).toUpperCase() + username.first?.slice(1)} {username.last?.charAt(0).toUpperCase() + username.last?.slice(1)}
                                    </p>
                                <div className="mainbar-post-belowname">
                                    <p className='mainbar-post-time-tag'>#{post?.tag},&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>{format(post.createdAt)}</p>
                                </div>
                            </div>
                    </div>
                        <div className="mainbar-post-right">
                            <button className='mainbar-button-save'>Save</button>
                            <button className='mainbar-button-save mainbar-button-download'>Download</button>
                        </div>
                </div>
                <Link to={`/post/${post?._id}`} className={`mainbar-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>{post.text}</p></Link>

                    <div className={`mainbar-mainpost ${props.darkmode?"changeModelite":""}`}>
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
      ))
    }
    </div>
    </div>
  )
}
