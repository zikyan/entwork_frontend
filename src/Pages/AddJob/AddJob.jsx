import './addjob.css';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { createJob } from '../../service/api';

export default function AddJob() {
  const caption=useRef()
  const des=useRef()
  const tag=useRef()

  const { user }=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  useEffect((e)=>{
    if(!user){
      navigate('/login')
    }
  },[user,navigate])


  const handleOnSubmit=(e)=>{
      e.preventDefault()
      const jobData={
        user:user,
        caption:caption.current.value,
        des:des.current.value,
        tag:tag.current.value
      }
      createJob(jobData)
      navigate('/work')
  }

  return (
<div className='addpost-parent'>
  <p>Post Job?</p>
    <form onSubmit={handleOnSubmit}>
      <div>
        <div>
            <input  style={{marginTop:'10px'}} name='text' ref={caption}  type="text" className='post-comment-textarea' placeholder='Enter Caption Here'/>
            <input  style={{marginTop:'10px'}} name='text' ref={des}  type="text" className='post-comment-textarea' placeholder='Enter Description Here'/>
            <input  style={{marginTop:'10px'}} name='tag' ref={tag}  type="text" className='post-comment-textarea' placeholder='Tag'/>
        </div>
        <br/>
      </div>
    <button type='submit' className='navbar-signup-button'>Post</button>
    </form>
</div>

  )
}