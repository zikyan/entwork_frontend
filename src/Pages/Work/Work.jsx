import React from 'react';
import './work.css';
import zikyan from '../../images/zikyan_dp.jpg';
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
                <p style={{fontWeight:"600",color:'#192252'}}>OR</p>
                <div className="work-postjob-button">
                    <button className='work-postjob-button'><WorkOutlineIcon style={{fontSize:'18px', marginRight:'5px'}} />Post a Job</button>
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
                                <p className='work-post-time-tag'>#mern,&nbsp;</p>
                                <p className='work-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="work-post-right">
                        <button className='work-button-save'>Save</button>
                    </div>
            </div>
            <Link to='/post' className='work-post-caption'><p style={{marginTop:'10px'}}>This history will still be there. The cat might leave.</p></Link>

                <div className="work-workpost">
                    {/* <img className='work-workpost-image' src={cat} alt="" /> */}
                    <p>Hi! I need help growing a YouTube channel so I am looking for someone who can handle ALL facets. I will need help with content strategy, SEO, channel promotion. The goal is to grow to 1k + subscribers, have high interest video topics for 2x per month, and optimize all videos and the full channel with SEO. I am looking for someone who can provide for me their case studies and proof that their strategies have worked with previous clients. Thanks!</p>
                </div>
                <div className="work-workpost-below">
                    <button className='work-start-chat-button'>Start Chat</button>
                </div>
        </div>
        </div>



    </div>
  )
}
