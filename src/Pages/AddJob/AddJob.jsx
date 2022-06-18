import './addjob.css';
import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createJob } from '../../service/api';
import { toast } from 'react-toastify';

export default function AddJob() {
  const caption=useRef()
  const des=useRef()
  const tag=useRef()
  const [categoryVar, setCategoryVar] = useState('Web Development')
  const [check, setCheck] = useState()

  const { user }=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  useEffect((e)=>{
    if(!user){
      navigate('/login')
    }
  },[user,navigate])


  const handleOnSubmit= async (e)=>{
      e.preventDefault()
      const jobData={
        user:user,
        caption:caption.current.value,
        des:des.current.value,
        tag:tag.current.value,
        category:categoryVar
      }
      if(!check){
        toast.error('Input Field Requied')
      }
      await createJob(jobData)
      toast.success('Job Posted Successfully')
      navigate('/work')
  }

  return (

    <div className="login-form">
        <div className="l-form">
            <form className="form" onSubmit={handleOnSubmit}>
                <h1 className="form__title">Post Job</h1>

                <div className="form__div">
                  <input type="text" className='form__input' name="text" onChange={(e)=>setCheck(e.target.value)} ref={caption} placeholder=" " />
                  <label for="" className="form__label">Job Heading</label>
                </div>

                <div className="form__div">
                  <input type="text" className='form__input' name='tag' ref={des} placeholder=" " />
                  <label for="" className="form__label">Job Description</label>
                </div>

                <div className="form__div">
                  <input type="text" className='form__input' name='tag' ref={tag} placeholder=" " />
                  <label for="" className="form__label">Tag</label>
                </div>

                <div style={{marginBottom:'10px'}} className="addpost-category-filter work-filter form__div">
                  <p>Select Category:</p>
                    <select onChange={(e)=>{
                      const selectCategory=e.target.value;
                      setCategoryVar(selectCategory)
                    }}>
                        <option value='Web Development'>Web Development</option>
                        <option value='App Development'>App Development</option>
                        <option value='UX/UI'>UX/UI</option>
                        <option value='Logo Designing'>Logo Designing</option>
                        <option value='Content Writing'>Content Writing</option>
                    </select>
                </div>
                
                <input type="submit" className='form__button' value="Post"/>
            </form>
        </div>
        </div>
/* <div className='addpost-parent'>
  <p>Post Job</p>
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
</div> */

  )
}