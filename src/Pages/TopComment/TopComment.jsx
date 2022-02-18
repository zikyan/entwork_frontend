import React from 'react';
import './topcomment.css';
import zikyan from '../../images/zikyan_dp.jpg';
import cat from '../../images/cat-post.jpg';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import faizan from '../../images/faizan.jpg';
import { Link } from 'react-router-dom';

export default function TopComment() {
  return (
    <div className="topcomment-parent">
        <div className="topcomment-upper3">
            <div className="topcomment-topcomment1">
                <div className="topcomment-topcomment-left">
                        <Link to='/profile'><img className='topcomment-topcomment-dp' src={zikyan} alt="" /></Link>
                        <div className="topcomment-topcomment-username">
                        <Link style={{textDecoration:'none', color:'#000',fontWeight:'600'}} to='/profile'>Zikyan Rasheed</Link>
                            <div className="topcomment-topcomment-belowname">
                                <p className='topcomment-topcomment-time-tag'>#funny,&nbsp;</p>
                                <p className='topcomment-topcomment-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="topcomment-topcomment-right">
                        <button className='topcomment-button-save'>Save</button>
                        <button className='topcomment-button-save topcomment-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/topcomment' className='topcomment-topcomment-caption'><p style={{marginTop:'10px'}}>The current labor environment</p></Link>

                <div className="topcomment-maintopcomment">
                    <img className='topcomment-maintopcomment-image' src={cat} alt="" />
                </div>
                <div className="topcomment-maintopcomment-below">
                        <div className="topcomment-maintopcomment-below-left">
                            <div className="topcomment-maintopcomment-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="topcomment-maintopcomment-below-right">
                            <button className='topcomment-maintopcomment-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='topcomment-maintopcomment-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='topcomment-maintopcomment-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
                <div className="topcomment-comment-text">
                    <p>34 Comments</p>
                </div>
        </div>

            <div className="topcomment-comment-people topcomment-subparent">
            <img className='comment-topcomment-dp' src={faizan} alt="" />
                        <div className="comment-topcomment-username">
                            <div className="comment-name-time-flex">
                                <p style={{fontWeight:'600'}}>Faizan Muahammad</p>
                                <p className='comment-topcomment-time'>&nbsp;2h</p>
                            </div>
                                <p className='comment-people-text'>OP you made my day with that description! Best thing I've red in a while, have a wonderful day!</p>

                                <div className="comment-topcomment-votes">
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
    </div>
  )
}
