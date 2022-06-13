import { useEffect, useState } from 'react';
import './mainbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { timelinePosts, getAllPost } from '../../service/api';
import EachPost from '../EachPost/EachPost';
import { useLocation } from 'react-router-dom';


export default function Mainbar({darkMode}) {

    const [posts, setPosts] = useState([])
    const { search } = useLocation()


    const { user }=useSelector((state)=>state.auth)

  useEffect(()=>{
        const fetchData = async ()=>{
            if(user && !search){
                const res = await timelinePosts(user._id)
                setPosts(res)
            }else{
                const res = await getAllPost(search);
                setPosts(res);
            }
            // else if (!user){
            //     const res = await getAllPost();
            //     setPosts(res);
            // }
            // else if(search){
            //     const res = await getAllPost(search);
            //     setPosts(res);
            // }
        }
    fetchData()
  },[search])
  return (
    <div className="mainbar-parent">
        <div className={`mainbar-box-design ${darkMode?"changeModeMain":""}`}>
        <div className="mainbar-upper2">
            <ul className={`${darkMode?"darkmainbar-ul2":"mainbar-ul2"}`}>
            <Link to='/'><li>#All</li></Link>
                <Link to='/?tag=sarcastic'><li>#sarcastic</li></Link>
                <Link to='/?tag=dank'><li>#dank</li></Link>
                <Link to='/?tag=depressed'><li>#depressed</li></Link>
                <Link to='/?tag=mern'><li>#mern</li></Link>
                <Link to='/?tag=ror'><li>#ror</li></Link>
                <Link to='/?tag=django'><li>#django</li></Link>
                <Link to='/?tag=laravel'><li>#laravel</li></Link>
                <li>#css</li>
                <li>#android</li>
                <li>#Weekly Highlights</li>
                <li>#Boba Fett</li>
                <li>#Biden</li>
                <li>#Omicron</li>
                <li>#work</li>
                <li>#css</li>
                <li>#android</li>
                <li>#Biden</li>
                <li>#Omicron</li>
                <li>#work</li>
                <li>#css</li>
                <li>#Cat</li>
            </ul>
        </div>
        </div>
        <div className={`mainbar-box-design-lower ${darkMode?"changeModeMain":""}`}>
            {
                posts.map((post)=>(
                    <EachPost key={post._id} darkMode={darkMode} post={post} />
                ))
            }
        </div>
    </div>
  )
}
