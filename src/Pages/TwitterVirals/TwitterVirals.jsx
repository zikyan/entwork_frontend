import { useState, useEffect } from "react"
import './twittervirals.css'
import axios from "axios"
import twitterImg from '../../images/twitter1.png'
import { format } from 'timeago.js'
import { Link } from "react-router-dom"

export default function TwitterVirals({darkMode}) {
    const [tweetData, setTweetData] = useState([]);
    const [tweetUser, setTweetUser] = useState([]);
    const [tweetImg, setTweetImg] = useState('');

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await axios.get('/api/twitter/get');
            setTweetData(response.data);
            setTweetUser(response.data[0]?.user);
            setTweetImg(response.data[0]?.extended_entities?.media[0]?.media_url_https);
        }
        fetchData();
    },[]);
    // tweetData.map((data)=>{
    //   console.log(data)
    // })
  return (
    <>
    <div className="admin-panel-heading">
      <p>Twitter Virals</p>
    </div>
      {
        tweetData?.map((post, index)=>(
          <div key={index} className="twitter-box-design-lower">
          <div className="mainbar-post1">
                    <div className="mainbar-post-left">
                            <img className='twitter-post-dp' src={twitterImg} alt="" />
                            <div className="mainbar-post-username">
                                    <p style={{color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}}>Twitter Virals</p> 
                                <div className="mainbar-post-belowname">
                                    <p className='mainbar-post-time-tag'>#virals,&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>{format(post?.created_at)}</p>
                                </div>
                            </div>
                    </div>
                        {/* <div className="mainbar-post-right">
                            <button className='mainbar-button-save'>Save</button>
                            <button className='mainbar-button-save mainbar-button-download'>Download</button>
                        </div> */}
                </div>

                {/* <p className="mainbar-post-caption" style={{marginTop:'10px'}}>{post?.text.slice(0,-23)}</p>

                    <div className={`mainbar-mainpost ${darkMode?"changeModelite":""}`}>
                        <img className='mainbar-mainpost-image' src={post?.extended_entities?.media[0]?.media_url_https} alt="" />
                    </div> */}

                    <div className="eachpost-eachpost-center">
                        
                        <div className={`mainbar-mainpost ${darkMode?"changeModelite":""}`}>
                            <Link to={`/post/${post?._id}`} className={`mainbar-post-caption ${darkMode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>{post?.text.slice(0,-23)}</p></Link>
                            <Link to={`/post/${post?._id}`}><img className='mainbar-mainpost-image' src={post?.extended_entities?.media[0]?.media_url_https} alt="" /></Link>
                        </div>
                        
                    </div>
                    
                    </div>
        ))
      }
      </>
  )
}
