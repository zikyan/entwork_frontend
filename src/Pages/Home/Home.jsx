import React from 'react';
import './home.css';
import Mainbar from '../../Components/Mainbar/Mainbar';
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../Components/RightSideBar/RightSideBar';

export default function Home() {
    return (
            <div className="home-container">
                <div className="side-flex">
                    <LeftSideBar />
                </div>
                <div className="main-flex">
                    <Mainbar />
                </div>
                <div className='right-flex'>
                    <RightSideBar />
                </div>
                
            </div>
    )
}
