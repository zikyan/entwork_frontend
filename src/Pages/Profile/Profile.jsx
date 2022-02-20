import React from 'react';
import './profile.css';
import cover from '../../images/cover.jpg';
import zikyan from '../../images/zikyan_dp.jpg';
import EditIcon from '@mui/icons-material/Edit';

export default function Profile() {
  return (
    <div className="profile-parent">
        <div className="profile-cover-container">
            <img className='profile-cover-img' src={cover} alt="" />
            <img className='profile-display-img' src={zikyan} alt="" />
            <p className='profile-name-text'>Zikyan Rasheed</p>
            <p className='profile-bio-text' >Dirty bit of sarcasm</p>
            <button className='profile-edit-button'><EditIcon style={{fontSize:'20px',marginRight:'5px'}} />Edit Profile</button>
            <div className="profile-ul-container">
                <ul className='profile-ul'>
                    <li className='profile-li-active'>All Posts</li>
                    <li>Comments</li>
                    <li>Saved Posts</li>
                    <li>Posted Jobs</li>
                    <li>Saved Jobs</li>
                    <li>Friends</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
