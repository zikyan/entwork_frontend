import './addpost.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addPostVar } from '../../features/post/postSlice';

export default function AddPost() {

  const [text, setText]=useState('')
  const dispatch=useDispatch()

  const { user }=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  useEffect((e)=>{
    if(!user){
      navigate('/loginfirst')
    }
  },[user,navigate])

  const handleOnSubmit=(e)=>{
      e.preventDefault()
      dispatch(addPostVar({text}))
      setText('')
      navigate('/')
  }



  return (
<div className='addpost-parent'>
  <p>What's on your mind?</p>
    <form onSubmit={handleOnSubmit}>
      <div>
        <div>
            <input  style={{marginTop:'10px'}} name='text' value={text} onChange={(e)=>setText(e.target.value)} type="text" className='post-comment-textarea' placeholder='Enter Text Here'/>
        </div>
        <br/>
      </div>
    <button type='submit' className='navbar-signup-button'>Post</button>
    </form>
</div>



  //   <div className='addpost-parent'>
  //   <p className='postTitle1'><b>What's on your mind?</b></p>
  //         <div className="addpost-container">
  //           {/* <div className="addpost-left">
  //             <div className="addpost-drop-images">
  //               <p style={{padding:'0',margin:'0'}}>Drop your images here</p>
                
                    
  //             </div>
              
             
  //           </div> */}
  //           <div className="addpost-right">
  //             <form onSubmit={handleOnSubmit} className='form1'>
  //               <div className="form-group-1">
  //                   {/* <input type="text" name='description' onChange={handleChange} />
  //                   <input type="text" name='userId' onChange={handleChange} />
  //                   <input type="text" name='tags' onChange={handleChange} /> */}

                    
  //                   <div className="addpost-2-buttons">
  //                   {/* <img className="icon1" alt='test' src={require("../../images/back1.png")}></img> */}
  //                   {/* <input className='addpost-input1' type="text" name='description' placeholder='Give your post a title' /> */}
  //                   {/* <textarea className='post-comment-textarea' > */}
  //                     <input type="text" className='post-comment-textarea' placeholder='Enter Text Here'/>
 
  //                     {/* <input className='addpost-input-2' type="text" name='userId' placeholder='User Id' ref={userId} /> */}

  //                    {/* <input className='addpost-input-2' type="text" name='tags' placeholder='Tags' ></input> */}
  //                   </div>

  //                   <br/>
  //                   {/*<div className="addpost-select-tags">
  //                     className="select">Select tags</p>
  //                     }
  //                    {/* <button className='btn btn-primary addpost-tags-button'>#sarcastic</button>
  //                     <button className='btn btn-primary addpost-tags-button'>#depressed</button>
  //                     <button className='btn btn-primary addpost-tags-button'>#cringe</button>
  //                     {//<button className='btn btn-primary addpost-tags-button'>#whatsapp</button>}
  //                      }
  //                     <br /><br />
  //                     </div>*/}
  //                  {/* <div className="addpost-container2">
  //                  } <img className="icon2" src={require("../../images/img1.png")}></img>
  //                     //<<ImageIcon style={{color:'#fff', cursor:'pointer'}}/>>
  //                     }
  //                     <label className='addpost-choose'><b>
  //                       Choose image/video</b>
  //                       <input
  //                                 className='addpost-file'
  //                                 type="file"
  //                                 id="file"
  //                                 accept=".png,.jpeg,.jpg"
                                  
  //                               />
  //                     </label>
                    
  //                   </div>*/}
                    
                         
  //               </div>
              
  //                       <div className='addpost-image-preview-container'>
  //                         {/* <img className='addpost-image-preview' alt="preview" />
  //                         <CancelIcon className='addpost-preview-cancel' /> */}
  //                       </div>
                  
  //               {/* <button  className='btn btn-success post-button' type='submit'>Post</button> */}
  //               <button type='submit' className='navbar-signup-button'>Post</button>
                
  // </form>
  //           </div>
  //         </div>
  //       </div>
        
  )
}