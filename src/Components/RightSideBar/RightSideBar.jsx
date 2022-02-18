import React from 'react';
import './rightsidebar.css';
import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import faizan from '../../images/faizan.jpg';
import abdullah from '../../images/abdullah.jpg';
import raees from '../../images/raees.jpg';
import { Link } from 'react-router-dom';

export default function RightSideBar() {
  return (
    <div className="rightsidebar-parent">
      <div className="rightsidebar-upper">
        <p className='rightsidebar-text'>EntWork Workplace</p>
        <p className='rightsidebar-upper-text'>Click the below button to find work</p>
        <div className="rightsidebar-find-post-button">
          <Link style={{textDecoration:'none'}} to='/work'><button className='rightsidebar-work-button'><WorkIcon style={{fontSize:'18px'}} className='rightsidebar-work-button-icon' />Find Job</button></Link>
          <button style={{marginLeft:'10px'}} className='rightsidebar-work-button'><WorkOutlineIcon style={{fontSize:'18px'}} className='rightsidebar-work-button-icon' />Post Job</button>
        </div>
      </div>
      <div className="rightsidebar-upper2">
      <p className='rightsidebar-work-text'>Trending Work Tags</p>
          <ul className='rightsidebar-ul2'>
                  <li>#Cat</li>
                  <li>#Facebook</li>
                  <li>#Stars War</li>
                  <li>#Boba Fett</li>
                  <li>#Biden</li>
                  <li>#Omicron</li>
                  <li>#work</li>
                  <li>#css</li>
                  <li>#android</li>
                  <li>#ror</li>
                  <li>#mern</li>
                  <li>#django</li>
                  <li>#python</li>
              </ul>
      </div>
      <div className="rightsidebar-upper3">
        <p className='rightsidebar-recent-jobs-text'>Recent Jobs</p>
        <div className="rightsidebar-recent-jobs-card">
        <div className="rightsidebar-post-left">
              <img className='rightsidebar-post-dp' src={abdullah} alt="" />
              <div className="rightsidebar-post-username">
                      <p>Abdullah Bin Zafar</p>
                  <div className="rightsidebar-post-belowname">
                      <p className='rightsidebar-post-tag'>#android,#SQLite,&nbsp;</p>
                      <p className='rightsidebar-post-time'>1h</p>
                  </div>
              </div>
          </div>
          <p className='rightsidebar-recent-jobs-description'>i want a simple crud based android application with content provider...</p>
          <button className='rightsidebar-start-chat-button'>Start Chat</button>
        </div>


        <div className="rightsidebar-recent-jobs-card">
        <div className="rightsidebar-post-left">
              <img className='rightsidebar-post-dp' src={faizan} alt="" />
              <div className="rightsidebar-post-username">
                      <p>Faizan Muhammad</p>
                  <div className="rightsidebar-post-belowname">
                      <p className='rightsidebar-post-tag'>#mern,#fullstack,&nbsp;</p>
                      <p className='rightsidebar-post-time'>2h</p>
                  </div>
              </div>
          </div>
          <p className='rightsidebar-recent-jobs-description'>need full stack site with functionality of chat and calling feature and...</p>
          <button className='rightsidebar-start-chat-button'>Start Chat</button>
        </div>


        <div className="rightsidebar-recent-jobs-card">
        <div className="rightsidebar-post-left">
              <img className='rightsidebar-post-dp' src={raees} alt="" />
              <div className="rightsidebar-post-username">
                      <p>Raees Ibrahim</p>
                  <div className="rightsidebar-post-belowname">
                      <p className='rightsidebar-post-tag'>#flutter,#reactnative,&nbsp;</p>
                      <p className='rightsidebar-post-time'>5h</p>
                  </div>
              </div>
          </div>
          <p className='rightsidebar-recent-jobs-description'>make me a flutter or reactnative based cross platform app for job...</p>
          <button className='rightsidebar-start-chat-button'>Start Chat</button>
        </div>
      </div>
    </div>
  )
}