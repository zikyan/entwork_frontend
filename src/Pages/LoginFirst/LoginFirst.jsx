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
    <div className="login-form">
        <div className="l-form">
            <form className="form" onSubmit={handleOnSubmit}>
                <h1 className="form__title">Login In</h1>

                <div className="form__div">
                  <input type="text" className='form__input' name="email" value={email} onChange={handleOnChange} placeholder=" " />
                  <label className="form__label">Email</label>
                </div>

                <div className="form__div">
                  <input type="password" className='form__input' name="password" value={password} onChange={handleOnChange} placeholder=" " />
                  <label className="form__label">Password</label>
                </div>
                <input type="submit" className='form__button' value="Login"/>
            </form>
        </div>
        </div>
  )
}
