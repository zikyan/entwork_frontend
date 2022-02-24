import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Post from './Pages/Post/Post';
import LeftSideBar from './Components/LeftSideBar/LeftSideBar';
import RightSideBar from './Components/RightSideBar/RightSideBar';
import Mainbar from './Components/Mainbar/Mainbar';
import Profile from './Pages/Profile/Profile';
import TopPost from './Pages/TopPost/TopPost';
import TopComment from './Pages/TopComment/TopComment';
import AddPost from './Pages/AddPost/AddPost';
import Work from './Pages/Work/Work';
import TwitterVirals from './Pages/TwitterVirals/TwitterVirals';
import WeeklyWinner from './Pages/WeeklyWinner/WeeklyWinner';
import Recommended from './Pages/Recommended/Recommended';
import Login from './Login/Login';
import React from 'react';
import SignUp from './signUp/signUp'

function App() {
  var [ShowLogin, setShowLogin] = React.useState(true);
  var [ShowsignUp, setShowsignUp] = React.useState(true);
  const handleLoginClick= function click()
   {
    
  return(setShowLogin((ShowLogin) => !ShowLogin))
     }


   const handleSignupClick= function click2()
     {    
    return(setShowsignUp((ShowsignUp) => !ShowsignUp))
       }
console.log();
  return (
    <div className='first'>
      {console.log(ShowsignUp)}
      <Login ShowLogin={ShowLogin} />
      <SignUp ShowsignUp={ShowsignUp}/>
    <div  className={`${ShowLogin&&ShowsignUp ? "app-parent" : "app-parent2"} `}>
      <BrowserRouter>
      <Navbar
       handleLoginClick={handleLoginClick}
       handleSignupClick={handleSignupClick} />
        <div className="home-container">
            <div className="left-flex">
                <LeftSideBar />
            </div>
            <div className="main-flex">
              
              <Routes>
                <Route exact path='/' element={<Mainbar/>} />
                <Route exact path='/post' element={<Post/>} />
                <Route exact path='/profile' element={<Profile/>} />
                <Route exact path='/toppost' element={<TopPost/>} />
                <Route exact path='/topcomment' element={<TopComment/>} />
                <Route exact path='/addpost' element={<AddPost/>} />
                <Route exact path='/work' element={<Work/>} />
                <Route exact path='/twittervirals' element={<TwitterVirals/>} />
                <Route exact path='/weeklywinner' element={<WeeklyWinner/>} />
                <Route exact path='/recommended' element={<Recommended/>} />
              </Routes>
            </div>
            <div className='right-flex'>
                <RightSideBar />
            </div>
        </div>
        
      </BrowserRouter>
      
    </div>
    </div>
  );
}

export default App;
