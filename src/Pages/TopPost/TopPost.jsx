import React from 'react';
import './toppost.css';
import zikyan from '../../images/zikyan_dp.jpg';
import cat from '../../images/cat-post.jpg';
// import test from '../../images/test.jpg';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

export default function TopPost() {
  return (
    <div className="post-parent">
            <div className="toppost-post1">
                <div className="toppost-post-left">
                        <Link to='/profile'><img className='toppost-post-dp' src={zikyan} alt="" /></Link>
                        <div className="toppost-post-username">
                            <Link style={{textDecoration:'none', color:'#000',fontWeight:'600'}} to='/profile'>Zikyan Rasheed</Link>
                            <div className="toppost-post-belowname">
                                <p className='toppost-post-time-tag'>#funny,&nbsp;</p>
                                <p className='toppost-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="toppost-post-right">
                        <button className='toppost-button-save'>Save</button>
                        <button className='toppost-button-save toppost-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className='toppost-post-caption'><p style={{marginTop:'10px'}}>This history will still be there. The cat might leave.</p></Link>

                <div className="toppost-mainpost">
                    <img className='toppost-mainpost-image' src={cat} alt="" />
                </div>
                <div className="toppost-mainpost-below">
                        <div className="toppost-mainpost-below-left">
                            <div className="toppost-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="toppost-mainpost-below-right">
                            <button className='toppost-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='toppost-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='toppost-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>
  )
}
