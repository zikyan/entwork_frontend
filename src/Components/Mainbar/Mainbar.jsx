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
                <Link to='/?tag=imf'><li>#imf</li></Link>
                <Link to='/?tag=pakistan'><li>#pakistan</li></Link>
                <Link to='/?tag=iphone'><li>#iphone</li></Link>
                <Link to='/?tag=nfs'><li>#nfs</li></Link>
                <Link to='/?tag=bobby'><li>#bobby</li></Link>
                <Link to='/?tag=djkhaled'><li>#djkhaled</li></Link>
                <Link to='/?tag=comedy'><li>#comedy</li></Link>
                <Link to='/?tag=meme'><li>#meme</li></Link>
                <Link to='/?tag=topgun'><li>#topgun</li></Link>
                <Link to='/?tag=biden'><li>#biden</li></Link>
                <Link to='/?tag=fun'><li>#fun</li></Link>
                <Link to='/?tag=us'><li>#us</li></Link>
                <Link to='/?tag=dark'><li>#dark</li></Link>
                <Link to='/?tag=sad'><li>#sad</li></Link>
                <Link to='/?tag=pdm'><li>#pdm</li></Link>
                <Link to='/?tag=nation'><li>#nation</li></Link>
                <Link to='/?tag=marvel'><li>#marvel</li></Link>
                <Link to='/?tag=omicron'><li>#omicron</li></Link>
                <Link to='/?tag=pti'><li>#pti</li></Link>
                <Link to='/?tag=bitcoin'><li>#bitcoin</li></Link>
                
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
