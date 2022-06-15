import React from 'react';
import './recommended.css';
import saireen from '../../images/hania.PNG';
import faizan from '../../images/faizan.jpg';
import cat from '../../images/humayu.jpg';
import casio from '../../images/abhinand.jpg';
// import test from '../../images/test.jpg';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

export default function recomm(props) {
  return (
      <>
    <div className="admin-panel-heading">
        <p>Recommended Posts</p>
    </div>
    <div className="recomm-parent">
        <div className={`recomm-box-design-lower ${props.darkmode?"changeModeMain":""}`}>
        <div className="recomm-upper3">
            <div className="recomm-post1">
                <div className="recomm-post-left">
                        <Link to='/profile'><img className='recomm-post-dp' src={saireen} alt="" /></Link>
                        <div className="recomm-post-username">
                            <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Saireen Ahmad</Link>
                            <div className="recomm-post-belowname">
                                <p className='recomm-post-time-tag'>Recommended,&nbsp;</p>
                                <p className='recomm-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="recomm-post-right">
                        <button className='recomm-button-save'>Save</button>
                        <button className='recomm-button-save recomm-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`recomm-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>Everything is Temporary But Tax is Permanent.</p></Link>

                <div className={`recomm-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='recomm-mainpost-image' src={cat} alt="" />
                </div>
                <div className="recomm-mainpost-below">
                        <div className="recomm-mainpost-below-left">
                            <div className="recomm-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="recomm-mainpost-below-right">
                            <button className='recomm-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='recomm-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='recomm-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>

        <div className="recomm-upper3">
            <div className="recomm-post1">
                <div className="recomm-post-left">
                <Link to='/profile'><img className='recomm-post-dp' src={faizan} alt="" /></Link>
                        <div className="recomm-post-username">
                        <Link style={{textDecoration:'none', color:`${props.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Faizan Muhammad</Link>
                            <div className="recomm-post-belowname">
                                <p className='recomm-post-time-tag'>Recommended,&nbsp;</p>
                                <p className='recomm-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="recomm-post-right">
                        <button className='recomm-button-save'>Save</button>
                        <button className='recomm-button-save recomm-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`recomm-post-caption ${props.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>You are not supposed to say this.</p></Link>

                <div className={`v-mainpost ${props.darkmode?"changeModelite":""}`}>
                    <img className='recomm-mainpost-image' src={casio} alt="" />
                </div>
                <div className="recomm-mainpost-below">
                        <div className="recomm-mainpost-below-left">
                            <div className="recomm-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="recomm-mainpost-below-right">
                            <button className='recomm-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='recomm-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='recomm-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>
        </div>



    </div>
    </>
  )
}
