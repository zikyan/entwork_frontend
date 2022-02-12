import React from 'react';
import './rightsidebar.css';
import WorkIcon from '@mui/icons-material/Work';

export default function RightSideBar() {
  return (
    <div className="rightsidebar-parent">
      <div className="rightsidebar-upper">
      <p className='rightsidebar-text'>onlyMemes Workplace</p>
      <p className='rightsidebar-upper-text'>Click the below button to find work</p>
      <button className='rightsidebar-work-button'><WorkIcon className='rightsidebar-work-button-icon' />Find Work</button>
      </div>
    </div>
  )
}