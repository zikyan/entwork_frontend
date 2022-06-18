import { useState, useEffect } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { getUserById, sharePost, getSharePost, savePost, getCommentByPostId, addPostLike } from '../../service/api';
import { format } from 'timeago.js';
import { useSelector } from 'react-redux';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function EachPost({darkMode, post}) {
    const { user }=useSelector((state)=>state.auth)
    const [userById, setUserById] = useState([])
    const [share, setShare] = useState()
    const [commentByPost, setCommentByPost] = useState()

    const [like,setLike] = useState(post?.count)
    const [isLiked,setIsLiked] = useState(false)
    

    
   

    // const [dislike,setDisLike] = useState(1)
    // const [isDisLiked,setIsDisLiked] = useState(false)

    const defaultImage="https://res.cloudinary.com/zikyancloudinary/image/upload/v1648317487/nimffj7bonumvaapmbp6.jpg"
    const navigate=useNavigate()
    useEffect(()=>{
        const fetchData = async ()=>{
            const username= await getUserById(post?.user)
            setUserById(username)
            const sharedPosts = await getSharePost(user?._id)
            setShare(sharedPosts)
            const comments = await getCommentByPostId(post?._id)
            setCommentByPost(comments)
                
        }
        fetchData()
    },[])

    const handleShare = async (e)=>{
        const postData = {
            user: e?.user,
            share: user,
            post:e?._id,
            text: e?.text,
            tag: e?.tag,
            img: e?.img,
            category:e?.category
          }
        await sharePost(postData)
        toast.success("Shared Successfully")
    }

    const downloadClick = (e)=>{
        const fetchUrl = e
    
          fetch(fetchUrl, {
            method: 'GET',
            headers: {}
          })
            .then((response) => {
              response.arrayBuffer().then(function (buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement('a');
    
                link.href = url;
                link.setAttribute(
                  'download',
                  post?.text+'.'+e.substr(e.lastIndexOf('.') + 1));
                document.body.appendChild(link);
                link.click();
              });
            })
            .catch((error) => {
              toast.error('Error Occured')
              return error;
            });
            if(!post?.img){
              toast.error('Choose an image/video Post')
            }else{
              toast.success('Downloaded Successfully')
            }
            
    }

    const saveClick = async (e)=>{
        const postData = {
            user: e?.user,
            saved: user,
            post:e?._id,
            text: e?.text,
            tag: e?.tag,
            img: e?.img,
            category:e?.category
          }
        await savePost(postData)
        toast.success('Saved Successfully')
    }

    useEffect(() => {
      setIsLiked(post?.vote.includes(user?._id));
    }, [user?._id, post?.vote]);

    const likeHandler = async (id)=>{
      await addPostLike(id,{userId:user?._id})
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
    }

    const noUserHandle = ()=>{
      navigate('/login')
    }

    // const dislikeHandler =()=>{
    //   setDisLike(isDisLiked ? dislike-1 : dislike+1)
    //   setIsDisLiked(!isDisLiked)
    // }

    // const dislikeHandler = async(id)=>{
    //   await addPostLike(id,{userId:user?._id})
    //   if(post?.vote.includes(user?._id)){
    //     setLike()
    //   }else{

    //   }
    //   setLike(isLiked ? like+1 : like-1)
    //   setIsLiked(!isLiked)
    // }
    
  return (
    <div className="mainbar-upper3">
                <div className="mainbar-post1">
                    <div className="mainbar-post-left">
                            <Link to={`/profile/${userById?.username}`}><img className='mainbar-post-dp' src={userById?.profilePicture || defaultImage} alt="" /></Link>
                            <div className="mainbar-post-username">
                                <Link style={{textDecoration:'none', color:`${darkMode?"#fff":'#000'}`,fontWeight:'600'}} to={`/profile/${userById?.username}`}>
                                    {userById?.first?.charAt(0).toUpperCase() + userById?.first?.slice(1)} {userById?.last?.charAt(0).toUpperCase() + userById?.last?.slice(1)}
                                    </Link>
                                <div className="mainbar-post-belowname">
                                    <p className='mainbar-post-time-tag'>#{post?.tag},&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>{post?.category},&nbsp;</p>
                                    <p className='mainbar-post-time-tag'>{format(post?.createdAt)}</p>
                                </div>
                            </div>
                    </div>
                        <div className="mainbar-post-right">
                          {
                            user?
                            <>
                              <button className='mainbar-button-save' onClick={()=>saveClick(post)}>Save</button>
                              <button className='mainbar-button-save mainbar-button-download' onClick={()=>downloadClick(post?.img)}>Download</button>
                            </>
                            
                            :
                            <>
                              <button className='mainbar-button-save' onClick={noUserHandle}>Save</button>
                              <button className='mainbar-button-save mainbar-button-download' onClick={noUserHandle}>Download</button>
                            </>
                            
                          }
                            
                            
                            
                        </div>
                </div>
                    <div className="eachpost-eachpost-center">
                        
                        <div className={`mainbar-mainpost ${darkMode?"changeModelite":""}`}>
                            <Link to={`/post/${post?._id}`} className={`mainbar-post-caption ${darkMode?"changeModeMain":""}`}><p style={{marginTop:'10px'}}>{post?.text}</p></Link>
                            {
                              post?.img?.substr(post?.img.length - 4) === '.mp4'?
                              <video width="580px" height="550px" style={{borderRadius:'5px', marginTop:'20px'}} controls>
                                <source src={post?.img} type="video/mp4"/>
                              </video>
                              :
                              <Link to={`/post/${post?._id}`}><img className='mainbar-mainpost-image' src={post?.img} alt="" /></Link>
                            }
                            
                        </div>
                        
                    </div>
                    

                    <div className="mainbar-mainpost-below">
                            <div className="mainbar-mainpost-below-left">
                                <div className="mainbar-mainpost-button-flex-parent">
                                    <p style={{marginTop:'2px'}} className='like-count'>{ like }</p>
                                    {
                                      user?
                                      <button style={{width:'80px'}} onClick={()=>likeHandler(post?._id)}>
                                      { isLiked? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                    </button>
                                    :
                                    <button style={{width:'80px'}} onClick={noUserHandle}>
                                      { isLiked? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                    </button>
                                    }
                                    
                                    {
                                      user?
                                      <Link style={{textDecoration:'none'}} to={`/post/${post?._id}`}><button style={{width:'80px'}}><ChatBubbleOutlineIcon style={{fontSize:'20px', marginRight:'5px'}}/> <p className='like-count'>{post?.comment}</p> </button></Link>
                                      :
                                      <button onClick={noUserHandle} style={{width:'80px'}}><ChatBubbleOutlineIcon style={{fontSize:'20px', marginRight:'5px'}}/> <p className='like-count'>{post?.comment}</p></button>
                                    }
                                    
                                </div>
                            </div>
                            
                            <div className="mainbar-mainpost-below-right">
                      {
                        user ?
                        <>
                                <FacebookShareButton
                                  url={post?.img}
                                  quote={post?.text}
                                  hashtag={post?.tag}
                                  description={post?.text}
                                  className="Demo__some-network__share-button"
                                >
                                  <button className='mainbar-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                                </FacebookShareButton>
                                

                                <TwitterShareButton
                                  title={post?.text}
                                  url={post?.img}
                                  hashtags={post?.tag}
                                >
                                  <button className='mainbar-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>
                                </TwitterShareButton>
                        </>:
                        <>
                          <button onClick={noUserHandle} className='mainbar-mainpost-facebook-button'><FacebookIcon style={{fontSize:'20px',marginRight:'5px'}}/>Facebook</button>
                          <button onClick={noUserHandle} className='mainbar-mainpost-twitter-button'><TwitterIcon style={{fontSize:'20px',marginRight:'5px'}} />Twitter</button>        
                        </>
                      }
                                

                                {
                                  user?
                                    user?._id === post?.user ? '' : <button className='mainbar-mainpost-share-button' onClick={()=>handleShare(post)}><ShareIcon style={{fontSize:'20px'}} /></button>
                                    :
                                    <button className='mainbar-mainpost-share-button' onClick={noUserHandle}><ShareIcon style={{fontSize:'20px'}} /></button>
                                }
                            </div>
                    </div>
                </div>
  )
}
