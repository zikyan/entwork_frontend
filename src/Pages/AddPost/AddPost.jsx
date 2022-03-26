import './addpost.css';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createPost } from '../../service/api';

export default function AddPost() {
  const text=useRef()
  const tag=useRef()
  const [image, setImage] = useState("")
  const [selectImage, setSelectImage] = useState('')

  const { user }=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  useEffect((e)=>{
    if(!user){
      navigate('/loginfirst')
    }
  },[user,navigate])



  const handleOnSubmit = async (e)=>{
      e.preventDefault()

        const formData =await  new FormData();
          formData.append('file', selectImage);
          formData.append('upload_preset', 'entwork');
          const options = {
            method: 'POST',
            body: formData,
          };
          const res = await fetch('https://api.Cloudinary.com/v1_1/zikyancloudinary/image/upload', options).then(res=>res.json());
    const postData = {
      user: user,
      text: text.current.value,
      tag: tag.current.value,
      img: res.url
    };
    await createPost(postData);
    return navigate('/');
  }
  return (
<div className='addpost-parent'>
  <p>What's on your mind?</p>
    <form onSubmit={handleOnSubmit}>
      <div>
        <div style={{width:'300px'}}>
            <input  style={{marginTop:'10px'}} name='text' ref={text}  type="text" className='post-comment-textarea' placeholder='Enter Text Here'/>
            <input  style={{marginTop:'10px'}} name='tag' ref={tag}  type="text" className='post-comment-textarea' placeholder='Tag'/>
            <input  style={{marginTop:'10px'}} name='file' onChange={(e)=>{setSelectImage(e.target.files[0])}} className='post-comment-textarea' type="file"/>
        </div>
        <br/>
      </div>
    <button type='submit' className='navbar-signup-button addpost-button'>Post</button>
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