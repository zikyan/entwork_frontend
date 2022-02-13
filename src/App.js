import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Post from './Pages/Post/Post';
import LeftSideBar from './Components/LeftSideBar/LeftSideBar';
import RightSideBar from './Components/RightSideBar/RightSideBar';
import Mainbar from './Components/Mainbar/Mainbar';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className='app-parent'>
    <BrowserRouter>
      <Navbar />
        <div className="home-container">
            <div className="left-flex">
                <LeftSideBar />
            </div>
            <div className="main-flex">
              <Routes>
                <Route exact path='/' element={<Mainbar/>} />
                <Route exact path='/post' element={<Post/>} />
                <Route exact path='/profile' element={<Profile/>} />
              </Routes>
            </div>
            <div className='right-flex'>
                <RightSideBar />
            </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
