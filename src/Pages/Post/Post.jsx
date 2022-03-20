import { useEffect, useState } from 'react';
import './post.css';
import zikyan from '../../images/zikyan_dp.jpg';
import casio from '../../images/casio.jpg';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import faizan from '../../images/faizan.jpg';
import abdullah from '../../images/abdullah.jpg';
import raees from '../../images/raees.jpg';
import { Link, useParams } from 'react-router-dom';
import { getPostByIdOne, getUserById } from '../../service/api';
import { format } from 'timeago.js';

export default function Post(props) {
    const [post, setPost] = useState()
    const [user, setUser] = useState()
    const { id } = useParams()
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const findPost = await getPostByIdOne(id)
            const findUser = await getUserById(findPost?.user)
            setPost(findPost)
            setUser(findUser)
        }
        fetchData()
    },[id])
  return (
      <div className={`post-parent ${props.darkmode?"darkpost-parent":""}`}>
        <div className="post-upper3">
            <div className="post-post1">
                <div className="post-post-left">
                        <Link to='/profile'><img className='post-post-dp' src={zikyan} alt="" /></Link>
                        <div className="post-post-username">
                        <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to={`/profile/${user?.username}`}>{user?.first?.charAt(0).toUpperCase() + user?.first?.slice(1)} {user?.last?.charAt(0).toUpperCase() + user?.last?.slice(1)}</Link>
                            <div className="post-post-belowname">
                                <p className='post-post-time-tag'>#{post?.tag},&nbsp;</p>
                                <p className='post-post-time-tag'>{format(post?.createdAt)}</p>
                            </div>
                        </div>
                </div>
                    <div className="post-post-right">
                        <button className='post-button-save'>Save</button>
                        <button className='post-button-save post-button-download'>Download</button>
                    </div>
            </div>
            <p className={`post-post-caption ${props.darkmode?"changeModeP":""}`} style={{marginTop:'10px', cursor:'auto'}}>{post?.text}</p>

                <div className={`post-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='post-mainpost-image' src={casio} alt="" />
                </div>
                <div className="post-mainpost-below">
                        <div className="post-mainpost-below-left">
                            <div className="post-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="post-mainpost-below-right">
                            <button className='post-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='post-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='mainbar-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
                <div className="post-comment-text">
                    <p>34 Comments</p>
                </div>
        </div>
            <div className="post-comment-parent">
                <div className="post-comment-1">
                    <img className='post-comment-dp' src={zikyan} alt="" />
                    <textarea className='post-comment-textarea' placeholder='Type your comment here' cols="1" rows="1"></textarea>
                </div>
                <button className='post-comment-button'>Post</button>
            </div>

            <div className="post-comment-people">
            <img className='comment-post-dp' src={faizan} alt="" />
                        <div className="comment-post-username">
                            <div className="comment-name-time-flex">
                                <p style={{fontWeight:'600'}}>Faizan Muahammad</p>
                                <p className='comment-post-time'>&nbsp;2h</p>
                            </div>
                                <p className='comment-people-text'>OP you made my day with that description! Best thing I've red in a while, have a wonderful day!</p>

                                <div className="comment-post-votes">
                                    <div className="comment-votes-flex1">
                                        <ArrowUpwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                        <p className='comment-votes-style'>180</p>
                                    </div>
                                    <div className="comment-votes-flex2">
                                        <ArrowDownwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                        <p className='comment-votes-style' >12</p>
                                    </div>
                                </div>
                        </div>      
            </div>

            <div className="post-comment-people">
            <img className='comment-post-dp' src={abdullah} alt="" />
                        <div className="comment-post-username">
                            <div className="comment-name-time-flex">
                                <p style={{fontWeight:'600'}}>Abdullah Bin Zafar</p>
                                <p className='comment-post-time'>&nbsp;3h</p>
                            </div>
                                <p className='comment-people-text'>Is that delos? Because if it is, the one thing I do remember was that chill cat. The ruins were kinda meh.</p>

                                <div className="comment-post-votes">
                                    <div className="comment-votes-flex1">
                                        <ArrowUpwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                        <p className='comment-votes-style'>106</p>
                                    </div>
                                    <div className="comment-votes-flex2">
                                        <ArrowDownwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                        <p className='comment-votes-style' >23</p>
                                    </div>
                                </div>

                        </div>

                        
            </div>

            <div className="post-comment-people">
            <img className='comment-post-dp' src={raees} alt="" />
                        <div className="comment-post-username">
                            <div className="comment-name-time-flex">
                                <p style={{fontWeight:'600'}}>Raees Ibrahim</p>
                                <p className='comment-post-time'>&nbsp;5h</p>
                            </div>
                                <p className='comment-people-text'>Listen here my son. <br />
                                    There are lots of pictures of the ruines.<br/>
                                    There are lots of pictures of cats. <br />
                                    There are few pictures of cats in <br />
                                    I rest my case.</p>

                                <div className="comment-post-votes">
                                    <div className="comment-votes-flex1">
                                        <ArrowUpwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                        <p className='comment-votes-style'>12</p>
                                    </div>
                                    <div className="comment-votes-flex2">
                                        <ArrowDownwardIcon style={{color:'#999999',fontSize:'20px'}} />
                                        <p className='comment-votes-style' >5</p>
                                    </div>
                                </div>

                        </div>      
            </div>
    </div>
  )
}
