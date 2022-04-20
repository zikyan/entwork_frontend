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
import { useState } from 'react';
// import Login from './Pages/Login/Login';
import React from 'react';
// import SignUp from './Pages/signUp/signUp';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddJob from './Pages/AddJob/AddJob';
import Chat from './Pages/Chat/Chat';

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
      <div>
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
                <Route exact path='/post/:id' element={<Post darkmode={darkMode}/>} />
                <Route exact path='/profile/:name' element={<Profile darkmode={darkMode}/>} />
                <Route exact path='/toppost' element={<TopPost darkmode={darkMode}/>} />
                <Route exact path='/topcomment' element={<TopComment darkmode={darkMode}/>} />
                <Route exact path='/addpost' element={<AddPost darkmode={darkMode}/>} />
                <Route exact path='/work' element={<Work darkMode={darkMode}/>} />
                <Route exact path='/twittervirals' element={<TwitterVirals darkmode={darkMode}/>} />
                <Route exact path='/weeklywinner' element={<WeeklyWinner darkmode={darkMode}/>} />
                <Route exact path='/recommended' element={<Recommended darkmode={darkMode}/>} />
                <Route exact path='/login' element={<LoginFirst darkmode={darkMode}/>} />
                <Route exact path='/register' element={<RegisterFirst darkmode={darkMode}/>} />
                <Route exact path='/addjob' element={<AddJob darkmode={darkMode}/>} />
                <Route exact path='/editprofile/:name' element={<EditProfile darkmode={darkMode}/>} />
                <Route exact path='/chat' element={<Chat />} />
                <Route exact path='/admin' element={<Admin darkmode={darkMode}/>} />
              </Routes>
            </div>
            <div className='right-flex'>
                <RightSideBar darkmode={darkMode} />
            </div>
        </div>
      <ToastContainer />
    </div>
    </div>
  );
}

export default App;
