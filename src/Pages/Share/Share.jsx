import { useState, useEffect } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { getUserById, sharePost, getSharePost } from '../../service/api';
import { format } from 'timeago.js';
import { useSelector } from 'react-redux';
import ShareExtra from './ShareExtra';

export default function Share({darkMode}) {
    const { user }=useSelector((state)=>state.auth)
    const [share, setShare] = useState()

    useEffect(()=>{
        const fetchData = async ()=>{
            // const username= await getUserById(post?.user)
            // setUserById(username)
            const sharedPosts = await getSharePost(user?._id)
            setShare(sharedPosts)
        }
        fetchData()
    },[])

  return (
    <div className="mainbar-parent">
        <div className={`${darkMode?"admin-panel-heading-dark":"admin-panel-heading"}`}>
            <p>Shared Posts</p>
        </div>
        <div className={`mainbar-box-design-lower ${darkMode?"changeModeMain":""}`}>
            {
                share?.map((sharePost, index)=>(
                  <div key={index} className="mainbar-upper3">
                    <div className="mainbar-post1">
                        <div className="mainbar-post-left">
                        <div className="mainbar-post-username">
                            <div>
                                <ShareExtra sharePost={sharePost} darkMode={darkMode} />
                            </div>
                                    <div style={{marginLeft:'35px', marginTop:'-15px'}} className="mainbar-post-belowname">
                                        <p className='mainbar-post-time-tag'>#{sharePost?.tag},&nbsp;</p>
                                        <p className='mainbar-post-time-tag'>{sharePost?.category},&nbsp;</p>
                                        <p className='mainbar-post-time-tag'>Shared Post</p>
                                    </div>
                                </div>
                        </div>
                            {/* <div className="mainbar-post-right">
                                <button className='mainbar-button-save'>Save</button>
                                <button className='mainbar-button-save mainbar-button-download'>Download</button>
                            </div> */}
                    </div>
                        <div className="eachpost-eachpost-center">
                            
                            <div className={`mainbar-mainpost ${darkMode?"changeModelite":""}`}>
                                <Link to={`/post/${sharePost?.post}`} className={`mainbar-post-caption ${darkMode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>{sharePost?.text}</p></Link>
                                <Link to={`/post/${sharePost?.post}`}><img className='mainbar-mainpost-image' src={sharePost?.img} alt="" /></Link>
                            </div>
                            
                        </div>
                        
          
                        <div className="mainbar-mainpost-below">
                                {/* <div className="mainbar-mainpost-below-left">
                                    <div className="mainbar-mainpost-button-flex-parent">
                                        <button> <ArrowUpwardIcon /> 1.5k</button>
                                        <button><ArrowDownwardIcon />40</button>
                                        <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                                    </div>
                                </div>
                                <div className="mainbar-mainpost-below-right">
                                    <button className='mainbar-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                                    <button className='mainbar-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                                </div> */}
                        </div>
                    </div>
                    ))
                  
                }
        </div>
    </div>


    
  )
}
