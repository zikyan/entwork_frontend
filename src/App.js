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
                <Route exact path='/toppost' element={<TopPost/>} />
                <Route exact path='/topcomment' element={<TopComment/>} />
                <Route exact path='/addpost' element={<AddPost/>} />
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
