import './addpost.css';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createPost } from '../../service/api';
import { toast } from 'react-toastify';

export default function AddPost() {
  const text=useRef()
  const tag=useRef()
  const [selectImage, setSelectImage] = useState('')
  const [categoryVar, setCategoryVar] = useState('Hot')
  const [check, setCheck] = useState()


  const { user }=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  useEffect((e)=>{
    if(!user){
      navigate('/login')
    }
  },[user,navigate])



  const handleOnSubmit = async (e)=>{
      e.preventDefault()
      
      if(selectImage.type === 'video/mp4'){
        const formData =await  new FormData();
          formData.append('file', selectImage);
          formData.append('upload_preset', 'mycover');
          const options = {
            method: 'POST',
            body: formData,
          };
          const res = await fetch('https://api.Cloudinary.com/v1_1/zikcover/video/upload', options).then(res=>res.json());

          const postData = {
            user: user,
            text: text.current.value,
            tag: tag.current.value,
            img: res.url,
            category:categoryVar
          };
          await createPost(postData);
          return navigate('/');
      }else{
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
          img: res.url,
          category:categoryVar
        };
        
        if(!check){
          toast.error("Input Field Required");
        }
        
        await createPost(postData);
        toast.success("Posted Successfully");
        return navigate('/');
      }

        
    
  }
  
  return (

<div className="login-form">
        <div className="l-form">
            <form className="form" onSubmit={handleOnSubmit}>
                <h1 className="form__title">What's on your mind?</h1>

                <div className="form__div">
                  <input type="text" className='form__input' name="text" onChange={(e)=>setCheck(e.target.value)} ref={text} placeholder=" " />
                  <label className="form__label">Your Text Here</label>
                </div>

                <div className="form__div">
                  <input type="text" className='form__input' name='tag' ref={tag} placeholder=" " />
                  <label className="form__label">Tag</label>
                </div>

                <div style={{marginBottom:'10px'}} className="addpost-category-filter work-filter form__div">
                  <p>Select Category:</p>
                    <select onChange={(e)=>{
                      const selectCategory=e.target.value;
                      setCategoryVar(selectCategory)
                    }}>
                        <option value="Hot">Hot</option>
                        <option value="Trending">Trending</option>
                        <option value="Fresh">Fresh</option>
                        <option value="Top">Top</option>
                        <option value="Random">Random</option>
                    </select>
                </div>

                <div className="form__div">
                  <input type="file" className='form__input' name='file' onChange={(e)=>{setSelectImage(e.target.files[0])}} />
                </div>

                
                <input type="submit" className='form__button' value="Post"/>
            </form>
        </div>
        </div>

/* <div className='addpost-parent'>
  <div className="addpost-container">
  <p>What's on your mind?</p>
    <form onSubmit={handleOnSubmit}>
      <div>
        <div style={{width:'300px'}}>
            <input  style={{marginTop:'10px'}} name='text' ref={text}  type="text" className='addpost-textarea' placeholder='Enter Text Here'/>
              <input  style={{marginTop:'10px'}} name='tag' ref={tag}  type="text" className='addpost-tag' placeholder='Tag'/>
              <select className='addpost-select'>
                <option value="fresh">Fresh</option>
                <option value="hot">Hot</option>
                <option value="trending">Trending</option>
                <option value="top">Top</option>
                <option value="random">Random</option>
              </select>
            <div className="addpost-img-video">
              <input name='file' className='addpost-custom-file-input' onChange={(e)=>{setSelectImage(e.target.files[0])}} type="file"/>
              <input name='file' className='addpost-custom-file-input' onChange={(e)=>{setSelectImage(e.target.files[0])}} type="file"/>
            </div>
        </div>
        <br/>
      </div>
    <button type='submit' className='navbar-signup-button addpost-button'>Post</button>
    </form>
    </div>
</div> */
      
        
  )
}