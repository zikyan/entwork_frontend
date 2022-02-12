import React from 'react';
import './mainbar.css';
import zikyan from '../../images/zikyan_dp.jpg';
import post1 from '../../images/post1.jpg';
import share from '../../images/share.png';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Mainbar() {
  return (
    <div className="mainbar-parent">
        <div className="mainbar-upper1">
            <ul className='mainbar-ul'>
                <li className='mainbar-li-selected'>Hot</li>
                <li>Trending</li>
                <li>Fresh</li>
                <li>Top</li>
                <li>Anime</li>
                <li>Games</li>
                <li>Lifestyle</li>
                {/* <li>Pretty Girls</li>
                <li>Movies</li>
                <li>Movies</li>
                <li>Movies</li>
                <li>Movies</li> */}
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
                        <img className='mainbar-post-dp' src={zikyan} alt="" />
                        <div className="mainbar-post-username">
                                <p>Zikyan Rasheed</p>
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
                <p className='mainbar-post-caption'>Pirate Bay response to legal threats from DreamWorks. Pirate Bay response to legal threats from DreamWorks</p>

                <div className="mainbar-mainpost">
                    <img className='mainbar-mainpost-image' src={post1} alt="" />
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
                            <button className='mainbar-mainpost-share-button'> <img className='mainbar-mainpost-share-button-image' src={share} alt="" /></button>
                        </div>
                </div>
        </div>
    </div>
  )
}
