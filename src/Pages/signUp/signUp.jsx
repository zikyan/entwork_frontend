import { useState, useEffect } from "react";
import './signUp.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { registerUser, reset } from "../../features/auth/authSlice";
import Spinner from "../../Components/Spinner";

export default function SignUp(ShowsignUp)
{
  const [formData, setFormData]=useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  })

  const {username, email, password, confirmPassword}=formData

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user, isLoading, isSuccess, isError, message}=useSelector((state)=>state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
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


    return( 
   <div className={`${ShowsignUp.ShowsignUp? "active" : ""} show`}>
     
    <div  className="login-form2">
    <button className="close2">X</button>
      <div className="form-box2 solid">
        <form onSubmit={handleOnSubmit}>
          <h1 className="login-text2">Sign Up</h1>
          <label>Username</label>
          <br></br>
          <input type="text"  name="username" value={username} onChange={handleOnChange} className="login-box2" />
          <br></br>
          <label>Email</label>
          <input type="text"  name="email" value={email} onChange={handleOnChange} className="login-box2" />
          <br></br>
          <label>Password</label>
          <br></br>
          <input type="password" name="password" value={password} onChange={handleOnChange} className="login-box2" />
          <br></br>
          <label>Confirm Password</label>
          <br></br>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleOnChange} className="login-box2" />
          <br></br>
          <input type="submit" value="SIGN UP" className="login-btn2" />
        </form>
      </div>
    </div>
  </div>
    )
}