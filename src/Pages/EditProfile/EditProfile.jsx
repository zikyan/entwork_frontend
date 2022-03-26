import './editprofile.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByUsername } from '../../service/api';
import { useRef } from 'react';
import { editProfile } from '../../service/api';

export default function EditProfile() {
    const {name}=useParams()
    const [username, setUsername] = useState()
    const { user }=useSelector((state)=>state.auth)
    const [selectImage, setSelectImage] = useState()
    const [cover, setCover] = useState()

    const first=useRef()
    const last=useRef()
    const bio=useRef()

  const navigate=useNavigate()
  useEffect((e)=>{
    const fetchData = async () =>{
        const userByName = await getUserByUsername(name)
        setUsername(userByName)
        if(!user || user?._id !== userByName?._id){
            navigate('/loginfirst')
        }
    }
    fetchData()
  },[user, navigate])
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const formData =await  new FormData();
          formData.append('file', selectImage);
          formData.append('upload_preset', 'entwork');
          const options = {
            method: 'POST',
            body: formData,
          };
          const res = await fetch('https://api.Cloudinary.com/v1_1/zikyancloudinary/image/upload', options).then(res=>res.json());
    const userData = {
        first: first.current.value,
        last: last.current.value,
        bio: bio.current.value,
        profilePicture: res.url,
      };
      await editProfile(name,userData)
      navigate(`/profile/${user?.username}`)
  }
  console.log(cover)
  return (
    <div className='addpost-parent'>
  <p style={{fontSize:'22px', fontWeight:'700', marginBottom:'20px'}}>Edit Profile</p>
    <form onSubmit={handleSubmit}>
      <div>
        <div style={{width:'300px'}}>
            <label>First Name</label>
            <input  style={{margin:'10px 0px'}} name='first' ref={first}  placeholder={username?.first} type="text" className='post-comment-textarea'/>
            <label>Last Name</label>
            <input  style={{margin:'10px 0px'}} name='last' ref={last}  placeholder={username?.last} type="text" className='post-comment-textarea'/>
            <label>Bio</label>
            <input  style={{margin:'10px 0px'}} name='bio' ref={bio} placeholder={username?.bio}  type="text" className='post-comment-textarea'/>
            <label>Profile Picture</label>
            <input  style={{margin:'10px 0px'}} name='file' onChange={(e)=>{setSelectImage(e.target.files[0])}} className='post-comment-textarea' type="file"/>
            <label>Cover Picture</label>
            <input  style={{margin:'10px 0px'}} name='cover' onChange={(e)=>{setCover(e.target.files[0])}} className='post-comment-textarea' type="file"/>
        </div>
        <br/>
      </div>
    <button type='submit' className='navbar-signup-button editprofile-update-button'>Update</button>
    </form>
</div>
  )
}
