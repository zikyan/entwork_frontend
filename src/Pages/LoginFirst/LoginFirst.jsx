import React from 'react';
import { useState, useEffect } from 'react';
import './loginfirst.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { loginUser, reset } from "../../features/auth/authSlice";
import Spinner from "../../Components/Spinner";

export default function LoginFirst() {

  const [formData, setFormData]=useState({
    email:'',
    password:'',
  })

  const {email, password}=formData

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
    const userData={
      email,
      password,
    }
    dispatch(loginUser(userData))
  }

  if(isLoading){
    return <Spinner />
  }

  return (
    <div  className="login-form">
        <div className="form-box solid">
          <form onSubmit={handleOnSubmit}>
            <div className="bar">
            <h1 className="login-text">Log In</h1>
            </div>
            <label>Email</label>
            <br></br>
            <input type="text"  name="email" value={email} onChange={handleOnChange} className="login-box" />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" value={password} onChange={handleOnChange} className="login-box" />
            <br></br>
            <div className="login-button-zik">
            <input type="submit" value="LOGIN" className="login-btn" />
            </div>
            
          </form>
        </div>
      </div>
  )
}
