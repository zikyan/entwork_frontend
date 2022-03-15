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
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
      })
    
      const {username, email, password, confirmPassword}=formData;
    
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
    <div  className="login-form">
        <div className="form-box solid">
          <form onSubmit={handleOnSubmit}>
            <div className="bar">
            <h1 className="login-text">Register</h1>
            </div>
            <label>Username</label>
            <br></br>
            <input type="text"  name="username" value={username} onChange={handleOnChange} />
            <br></br>
            <label>Email</label>
            <br></br>
            <input type="email"  name="email" value={email} onChange={handleOnChange} />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" value={password} onChange={handleOnChange} />
            <br></br>
            <label>Confirm Password</label>
            <br></br>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleOnChange} />
            <br></br>
            <div className="login-button-zik">
            <input type="submit" value="Register" className="login-btn" />
            </div>
            
          </form>
        </div>
      </div>
  )
}
