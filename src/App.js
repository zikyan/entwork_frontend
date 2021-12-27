import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='app-parent'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
