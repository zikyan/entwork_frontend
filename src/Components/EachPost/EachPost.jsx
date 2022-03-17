import { useState, useEffect } from 'react';
import zikyan from '../../images/zikyan_dp.jpg';
import faizan from '../../images/faizan.jpg';
import cat from '../../images/cat-post.jpg';
import casio from '../../images/casio.jpg';
// import test from '../../images/test.jpg';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { getUserById } from '../../service/api';

export default function EachPost({darkMode, post}) {
    const [user, setUser] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const username=await getUserById(post.user)
            setUser(username)
        }
        fetchData()
    },[])
  return (
    <div className="mainbar-upper3">
                <div className="mainbar-post1">
                    <div className="mainbar-post-left">
                            <Link to='/profile'><img className='mainbar-post-dp' src={zikyan} alt="" /></Link>
                            <div className="mainbar-post-username">
                                <Link style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>{user.username}</Link>
                                <div className="mainbar-post-belowname">
                                    <p className='mainbar-post-time-tag'>#funny,&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>2h</p>
                                </div>
                            </div>
                    </div>
                        <div className="mainbar-post-right">
                            <button className='mainbar-button-save'>Save</button>
                            <button className='mainbar-button-save mainbar-button-download'>Download</button>
                        </div>
                </div>
                <Link to='/post' className={`mainbar-post-caption ${darkMode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>{post.text}</p></Link>

                    <div className={`mainbar-mainpost ${darkMode?"changeModelite":""}`}>
                        <img className='mainbar-mainpost-image' src={cat} alt="" />
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
  )
}
