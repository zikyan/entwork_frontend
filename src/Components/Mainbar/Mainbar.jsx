import React from 'react';
import './mainbar.css';
import zikyan from '../../images/zikyan_dp.jpg';
import post1 from '../../images/post1.jpg';
import share from '../../images/share.png';
import arrow_up from '../../images/arrow-up.png';
import arrow_down from '../../images/arrow-down.png';
import comment from '../../images/comment.png';

export default function Mainbar() {
  return (
    <div className="mainbar-parent">
        <div className="mainbar-upper1">
            <ul className='mainbar-ul'>
                <li>Hot</li>
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
                <li>Cat</li>
                <li>Facebook</li>
                <li>Stars War</li>
                <li>Boba Fett</li>
                <li>Biden</li>
                <li>Omicron</li>
                <li>Weekly Highlights</li>
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
                            <button><img className='mainbar-mainpost-arrow' src={arrow_up} alt="" />1.5k</button>
                            <button><img className='mainbar-mainpost-arrow' src={arrow_down} alt="" />40</button>
                            <button><img className='mainbar-mainpost-arrow' src={comment} alt="" />100</button>
                            
                        </div>
                        <div className="mainbar-mainpost-below-right">
                            <button className='mainbar-mainpost-facebook-button'>Facebook</button>
                            <button className='mainbar-mainpost-twitter-button'>Twitter</button>
                            <button className='mainbar-mainpost-share-button'> <img className='mainbar-mainpost-share-button-image' src={share} alt="" /></button>
                        </div>
                </div>
        </div>
    </div>
  )
}
