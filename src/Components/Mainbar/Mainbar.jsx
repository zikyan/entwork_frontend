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
        {/* <div className="mainbar-upper1">
            <ul className='mainbar-ul'>
                <li className='mainbar-li-selected'>Fun</li>
                <li>Work</li>
                <li>Twitter Virals</li>
                <li>weekly winner</li>
                <li>Recommended</li>
            </ul>
        </div> */}
        <div className="mainbar-upper2">
            <ul className={`${darkMode?"darkmainbar-ul2":"mainbar-ul2"}`}>
                <Link to='/?category=sarcastic'><li>#sarcastic</li></Link>
                <Link to='/?category=dank'><li>#dank</li></Link>
                <Link to='/?category=depressed'><li>#depressed</li></Link>
                <Link to='/?category=mern'><li>#mern</li></Link>
                <Link to='/?category=ror'><li>#ror</li></Link>
                <Link to='/?category=django'><li>#django</li></Link>
                <Link to='/?category=laravel'><li>#laravel</li></Link>
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
          

        {/* <div className="mainbar-upper3">
            <div className="mainbar-post1">
                <div className="mainbar-post-left">
                <Link to='/profile'><img className='mainbar-post-dp' src={faizan} alt="" /></Link>
                        <div className="mainbar-post-username">
                        <Link style={{textDecoration:'none', color:`${darkMode.darkmode?"#fff":'#000'}`,fontWeight:'600'}} to='/profile'>Faizan Muhammad</Link>
                            <div className="mainbar-post-belowname">
                                <p className='mainbar-post-time-tag'>#funny,&nbsp;</p>
                                <p className='mainbar-post-time-tag'>2h</p>
                            </div>
                        </div>
                </div>
                    <div className="mainbar-post-right">
                        <button className='mainbar-button-save'>Save</button>
                        <button className='mainbar-button-save mainbar-button-download'>Download</button>
                    </div>
            </div>
            <Link to='/post' className={`mainbar-post-caption ${darkMode.darkmode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>The current labor environment</p></Link>

                <div className={`mainbar-mainpost ${darkMode.darkmode?"changeModelite":""}`}>
                    <img className='mainbar-mainpost-image' src={casio} alt="" />
                </div>
                <div className="mainbar-mainpost-below">
                        <div className="mainbar-mainpost-below-left">
                            <div className="mainbar-mainpost-button-flex-parent">
                                <button> <ArrowUpwardIcon /> 1.5k</button>
                                <button><ArrowDownwardIcon />40</button>
                                <button><ChatBubbleOutlineIcon style={{fontSize:'20px',marginRight:'5px'}}/>100</button>
                            </div>
                        </div>
                        <div className="mainbar-mainpost-below-right">
                            <button className='mainbar-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                            <button className='mainbar-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                            <button className='mainbar-mainpost-share-button'><ShareIcon style={{fontSize:'20px'}} /></button>
                        </div>
                </div>
        </div> */}
        </div>



    </div>
  )
}
