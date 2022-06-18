import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Post from './Pages/Post/Post';
import LeftSideBar from './Components/LeftSideBar/LeftSideBar';
import RightSideBar from './Components/RightSideBar/RightSideBar';
import Mainbar from './Components/Mainbar/Mainbar';
import Profile from './Pages/Profile/Profile';
import TopPost from './Pages/TopPost/TopPost';
import TopComment from './Pages/TopComment/TopComment';
import AddPost from './Pages/AddPost/AddPost';
import LoginFirst from './Pages/LoginFirst/LoginFirst';
import RegisterFirst from './Pages/RegisterFirst/RegisterFirst';
import Work from './Pages/Work/Work';
import TwitterVirals from './Pages/TwitterVirals/TwitterVirals';
import WeeklyWinner from './Pages/WeeklyWinner/WeeklyWinner';
import Recommended from './Pages/Recommended/Recommended';
import EditProfile from './Pages/EditProfile/EditProfile';
import Admin from './Pages/Admin/Admin';
import EditPost from './Pages/EditPost/EditPost';
import Share from './Pages/Share/Share';
import { useState } from 'react';
// import Login from './Pages/Login/Login';
import React from 'react';
// import SignUp from './Pages/signUp/signUp';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddJob from './Pages/AddJob/AddJob';
import Chat from './Pages/Chat/Chat';
import EditJob from './Pages/EditJob/EditJob';
import Job from './Pages/Job/Job';
import RecommendedJobs from './Pages/RecommendedJobs/RecommendedJobs';

function App() {
  const [darkMode,setdarkMode]=useState(false)
  function darkFunc(){
    setdarkMode(preMode=>!preMode)
  }
  // console.log(darkMode)
  // var [ShowLogin, setShowLogin] = React.useState(true);
  // var [ShowsignUp, setShowsignUp] = React.useState(true);
//   const handleLoginClick= function click()
//    {
    
//   return(setShowLogin((ShowLogin) => !ShowLogin))
//      }


//    const handleSignupClick= function click2()
//      {    
//     return(setShowsignUp((ShowsignUp) => !ShowsignUp))
//        }
// }
  
  return (
    <div className={`app-parent ${darkMode?"changeMode":""}`}> 
    {/* {console.log(ShowsignUp)} */}
      {/* <Login ShowLogin={ShowLogin} />
      <SignUp ShowsignUp={ShowsignUp}/> */}
    {/* <div  className={`${ShowLogin&&ShowsignUp ? "app-parent" : "app-parent2"}`}>  */}
    <div> 
      <div className='mobile-navbar'>
      <Navbar className='navbar-sticky'
      //  handleLoginClick={handleLoginClick}
      //  handleSignupClick={handleSignupClick}
       changeMode={darkFunc} darkmode={darkMode} />
      </div>
        <div className="home-container">
            <div className="left-flex">
                <LeftSideBar darkmode={darkMode}/>
            </div>
            <div className="main-flex">
              <Routes>
                <Route exact path='/' element={<Mainbar darkMode={darkMode}/>} />
                <Route exact path='/post/:id' element={<Post darkMode={darkMode}/>} />
                <Route exact path='/profile/:name' element={<Profile darkMode={darkMode}/>} />
                <Route exact path='/toppost' element={<TopPost darkMode={darkMode}/>} />
                <Route exact path='/topcomment' element={<TopComment darkMode={darkMode}/>} />
                <Route exact path='/addpost' element={<AddPost darkMode={darkMode}/>} />
                <Route exact path='/work' element={<Work darkMode={darkMode}/>} />
                <Route exact path='/twittervirals' element={<TwitterVirals darkMode={darkMode}/>} />
                <Route exact path='/weeklywinner' element={<WeeklyWinner darkMode={darkMode}/>} />
                <Route exact path='/recommended' element={<Recommended darkMode={darkMode}/>} />
                <Route exact path='/login' element={<LoginFirst darkMode={darkMode}/>} />
                <Route exact path='/register' element={<RegisterFirst darkMode={darkMode}/>} />
                <Route exact path='/addjob' element={<AddJob darkMode={darkMode}/>} />
                <Route exact path='/editprofile/:name' element={<EditProfile darkMode={darkMode}/>} />
                <Route exact path='/chat' element={<Chat darkMode={darkMode}/>} />
                <Route exact path='/admin' element={<Admin darkMode={darkMode}/>} />
                <Route exact path='/editpost/:id' element={<EditPost/>} />
                <Route exact path='/shared' element={<Share darkMode={darkMode}/>} />
                <Route exact path='/editjob/:id' element={<EditJob/>} />
                <Route exact path='/job/:id' element={<Job darkMode={darkMode}/>} />
                <Route exact path='/recommendedjob' element={<RecommendedJobs darkMode={darkMode}/>} />
              </Routes>
            </div>
            <div className='right-flex'>
                <RightSideBar darkMode={darkMode} />
            </div>
        </div>
      <ToastContainer />
    </div>
    </div>
  );
}

export default App;
