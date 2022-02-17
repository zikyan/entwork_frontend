import React from 'react';
import './work.css';
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
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <div className="work-parent">
        <div className="work-box-design">
        {/* <div className="work-upper1">
            <ul className='work-ul'>
                <li className='work-li-selected'>Fun</li>
                <li>Work</li>
                <li>Twitter Virals</li>
                <li>weekly winner</li>
                <li>Recommended</li>
            </ul>
        </div> */}
        <div className="work-upper2">
            <ul className='work-ul2'>
                <li>#mern</li>
                <li>#ror</li>
                <li>#django</li>
                <li>#laravel</li>
                <li>#python</li>
                <li>#angular</li>
                <li>#php</li>
                <li>#flask</li>
                <li>#react native</li>
                <li>#android</li>
                <li>#unity3d</li>
                <li>#javascript</li>
                <li>#SEO</li>
                <li>#marketing</li>
                <li>#flutter</li>
                <li>#wordpress</li>
                <li>#swift</li>
                <li>#c++</li>
                <li>#nest.js</li>
                <li>#machine learning</li>
                <li>#C</li>
            </ul>
        </div>
        </div>

        <div className="work-belowtags-parent">
            <div className="work-filter-center">
                <div className="work-filter">
                    <select>
                    <option value="All">All</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Ux/Ui">Ux/Ui</option>
                        <option value="Logo Designing">Logo Designing</option>
                        <option value="Content Writing">Content Writing</option>
                    </select>
                </div>
                <div className="work-postjob-button">
                    <button className='navbar-signup-button'><WorkOutlineIcon style={{fontSize:'18px', marginRight:'5px'}} />Post Job</button>
                </div>
            </div>
        </div>

        <div className="work-box-design-lower">
        <div className="work-upper3">
            <div className="work-post1">
                <div className="work-post-left">
                        <Link to='/profile'><img className='work-post-dp' src={zikyan} alt="" /></Link>
                        <div className="work-post-username">
                            <Link style={{textDecoration:'none', color:'#000',fontWeight:'600'}} to='/profile'>Zikyan Rasheed</Link>
                            <div className="work-post-belowname">
                                <p className='work-post-time-tag'>#funny,&nbsp;</p>
                                <p className='work-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="work-post-right">
                        <button className='work-button-save'>Save</button>
                        <button className='work-button-save work-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className='work-post-caption'><p style={{marginTop:'10px'}}>This history will still be there. The cat might leave.</p></Link>

                <div className="work-workpost">
                    <img className='work-workpost-image' src={cat} alt="" />
                </div>
                <div className="work-workpost-below">
                        <div className="work-workpost-below-left">
                            <div className="work-workpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="work-workpost-below-right">
                            <button className='work-workpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='work-workpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='work-workpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>

        <div className="work-upper3">
            <div className="work-post1">
                <div className="work-post-left">
                <Link to='/profile'><img className='work-post-dp' src={faizan} alt="" /></Link>
                        <div className="work-post-username">
                        <Link style={{textDecoration:'none', color:'#000',fontWeight:'600'}} to='/profile'>Faizan Muhammad</Link>
                            <div className="work-post-belowname">
                                <p className='work-post-time-tag'>#funny,&nbsp;</p>
                                <p className='work-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="work-post-right">
                        <button className='work-button-save'>Save</button>
                        <button className='work-button-save work-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className='work-post-caption'><p style={{marginTop:'10px'}}>The current labor environment</p></Link>

                <div className="work-workpost">
                    <img className='work-workpost-image' src={casio} alt="" />
                </div>
                <div className="work-workpost-below">
                        <div className="work-workpost-below-left">
                            <div className="work-workpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="work-workpost-below-right">
                            <button className='work-workpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='work-workpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='work-workpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div>
        </div>



    </div>
  )
}
