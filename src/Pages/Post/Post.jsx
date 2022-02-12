import React from 'react';
import './post.css';
import zikyan from '../../images/zikyan_dp.jpg';
import cat from '../../images/cat-post.jpg';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import faizan from '../../images/faizan.jpg';
import abdullah from '../../images/abdullah.jpg';
import raees from '../../images/raees.jpg';
import { Link } from 'react-router-dom';

export default function Post() {
  return (
      <div className="post-parent">
        <div className="post-upper3">
            <div className="post-post1">
                <div className="post-post-left">
                        <img className='post-post-dp' src={zikyan} alt="" />
                        <div className="post-post-username">
                                <p>Zikyan Rasheed</p>
                            <div className="post-post-belowname">
                                <p className='post-post-tag'>#funny,&nbsp;</p>
                                <p className='post-post-time'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="post-post-right">
                        <button className='post-button-save'>Save</button>
                        <button className='post-button-save post-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className='post-post-caption'><p style={{marginTop:'10px'}}>The current labor environment</p></Link>

                <div className="post-mainpost">
                    <img className='post-mainpost-image' src={cat} alt="" />
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
                    <textarea className='post-comment-textarea' placeholder='Type your comment here' cols="30" rows="3"></textarea>
                </div>
                <button className='post-comment-button'>Post</button>
            </div>

            <div className="post-comment-people">
            <img className='comment-post-dp' src={faizan} alt="" />
                        <div className="comment-post-username">
                            <div className="comment-name-time-flex">
                                <p>Faizan Muahammad</p>
                                <p className='comment-post-time'>&nbsp;2h</p>
                            </div>
                                <p className='comment-people-text'>OP you made my day with that description! Best thing I've red in a while, have a wonderful day!</p>
                        </div>      
            </div>

            <div className="post-comment-people">
            <img className='comment-post-dp' src={abdullah} alt="" />
                        <div className="comment-post-username">
                            <div className="comment-name-time-flex">
                                <p>Abdullah Bin Zafar</p>
                                <p className='comment-post-time'>&nbsp;3h</p>
                            </div>
                                <p className='comment-people-text'>Is that delos? Because if it is, the one thing I do remember was that chill cat. The ruins were kinda meh.</p>
                        </div>      
            </div>

            <div className="post-comment-people">
            <img className='comment-post-dp' src={raees} alt="" />
                        <div className="comment-post-username">
                            <div className="comment-name-time-flex">
                                <p>Raees Ibrahim</p>
                                <p className='comment-post-time'>&nbsp;5h</p>
                            </div>
                                <p className='comment-people-text'>Listen here my son. <br />
There are lots of pictures of the ruines.<br/>
There are lots of pictures of cats. <br />
There are few pictures of cats in <ruins className="br"></ruins>
I rest my case.</p>
                        </div>      
            </div>
    </div>
  )
}
