import React from 'react';
import { useState, useEffect } from 'react';
import './registerfirst.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { registerUser, reset } from "../../features/auth/authSlice";
import Spinner from "../../Components/Spinner";

export default function RegisterFirst() {

    const [formData, setFormData]=useState({
        first:'',  
        last:'',
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
      })
    
      const {first, last, username, email, password, confirmPassword}=formData;
    
      const navigate=useNavigate()
      const dispatch=useDispatch()
    
      const {user, isLoading, isSuccess, isError, message}=useSelector((state)=>state.auth)
    
      useEffect(()=>{
        if(isError){
          toast.error(message)
        }
        if(isSuccess){
          navigate('/')
        }
        if(user){
          navigate('/')
        }
        dispatch(reset())
      },[user, isError, isSuccess, message, dispatch, navigate])
    
      const handleOnChange=(e)=>{
        setFormData((prevState)=>({
          ...prevState,[e.target.name]:e.target.value
        }))
      }
    
      const handleOnSubmit=(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
          toast.error('Password do not match')
        }else{
          const userData={
            first,
            last,
            username,
            email,
            password,
          }
          dispatch(registerUser(userData))
        }
      }
    
      if(isLoading){
        return <Spinner />
      }

  return (
    // <div  className="login-form">
    //     <div className="form-box solid">
    //       <form onSubmit={handleOnSubmit}>
    //         <div className="bar">
    //         <h1 className="login-text">Register</h1>
    //         </div>
    //         <label>First Name</label>
    //         <br></br>
    //         <input type="text"  name="first" value={first} onChange={handleOnChange} />
    //         <br></br>
    //         <label>Last Name</label>
    //         <br></br>
    //         <input type="text"  name="last" value={last} onChange={handleOnChange} />
    //         <br></br>
    //         <label>Username</label>
    //         <br></br>
    //         <input type="text"  name="username" value={username} onChange={handleOnChange} />
    //         <br></br>
    //         <label>Email</label>
    //         <br></br>
    //         <input type="email"  name="email" value={email} onChange={handleOnChange} />
    //         <br></br>
    //         <label>Password</label>
    //         <br></br>
    //         <input type="password" name="password" value={password} onChange={handleOnChange} />
    //         <br></br>
    //         <label>Confirm Password</label>
    //         <br></br>
    //         <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleOnChange} />
    //         <br></br>
    //         <div className="login-button-zik">
    //         <input type="submit" value="Register" className="login-btn" />
    //         </div>
            
    //       </form>
    //     </div>
    //   </div>

    <div  className="login-form">
    <div class="l-form">
        <form class="form" onSubmit={handleOnSubmit}>
            <h1 class="form__title">Signup In</h1>

            <div class="form__div">
              <input type="text" className='form__input' name="first" value={first} onChange={handleOnChange} placeholder=" " />
              <label class="form__label">First Name</label>
            </div>

            <div class="form__div">
              <input type="text" className='form__input' name="last" value={last} onChange={handleOnChange} placeholder=" " />
              <label class="form__label">Last Name</label>
            </div>

            <div class="form__div">
              <input type="text" className='form__input' name="username" value={username} onChange={handleOnChange} placeholder=" " />
              <label class="form__label">Username</label>
            </div>

            <div class="form__div">
              <input type="email" className='form__input' name="email" value={email} onChange={handleOnChange} placeholder=" " />
              <label class="form__label">Email</label>
            </div>

            <div class="form__div">
              <input type="password" className='form__input' name="password" value={password} onChange={handleOnChange} placeholder=" " />
              <label class="form__label">Password</label>
            </div>

            <div class="form__div">
              <input type="password" className='form__input' name="confirmPassword" value={confirmPassword} onChange={handleOnChange} placeholder=" " />
              <label class="form__label">Confirm Password</label>
            </div>

            <input type="submit" className='form__button' value="Signup"/>
        </form>
    </div>
  </div>
  )
}
