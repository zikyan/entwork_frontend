import React from 'react';
import './mainbar.css';
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

export default function Mainbar() {
  return (
    <div className="mainbar-parent">
        <div className="mainbar-upper1">
            <ul className='mainbar-ul'>
                <li className='mainbar-li-selected'>Fun</li>
                <li>Work</li>
                <li>Twitter Virals</li>
                <li>weekly winner</li>
                <li>Recommended</li>
            </ul>
        </div>
        <div className="mainbar-upper2">
            <ul className='mainbar-ul2'>
                <li>#Cat</li>
                <li>#Facebook</li>
                <li>#Stars War</li>
                <li>#Boba Fett</li>
                <li>#Biden</li>
                <li>#Omicron</li>
                <li>#work</li>
                <li>#css</li>
                <li>#android</li>
                <li>#Weekly Highlights</li>
            </ul>
        </div>
        <div className="mainbar-upper3">
            <div className="mainbar-post1">
                <div className="mainbar-post-left">
                        <Link to='/profile'><img className='mainbar-post-dp' src={zikyan} alt="" /></Link>
                        <div className="mainbar-post-username">
                            <Link style={{textDecoration:'none', color:'#000'}} to='/profile'>Zikyan Rasheed</Link>
                            <div className="mainbar-post-belowname">
                                <p className='mainbar-post-tag'>#funny,&nbsp;</p>
                                <p className='mainbar-post-time'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="mainbar-post-right">
                        <button className='mainbar-button-save'>Save</button>
                        <button className='mainbar-button-save mainbar-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className='mainbar-post-caption'><p style={{marginTop:'10px'}}>This history will still be there. The cat might leave.</p></Link>

                <div className="mainbar-mainpost">
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


        <div className="mainbar-upper3">
            <div className="mainbar-post1">
                <div className="mainbar-post-left">
                <Link to='/profile'><img className='mainbar-post-dp' src={faizan} alt="" /></Link>
                        <div className="mainbar-post-username">
                        <Link style={{textDecoration:'none', color:'#000'}} to='/profile'>Faizan Muhammad</Link>
                            <div className="mainbar-post-belowname">
                                <p className='mainbar-post-tag'>#funny,&nbsp;</p>
                                <p className='mainbar-post-time'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="mainbar-post-right">
                        <button className='mainbar-button-save'>Save</button>
                        <button className='mainbar-button-save mainbar-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className='mainbar-post-caption'><p style={{marginTop:'10px'}}>The current labor environment</p></Link>

                <div className="mainbar-mainpost">
                    <img className='mainbar-mainpost-image' src={casio} alt="" />
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



    </div>
  )
}
