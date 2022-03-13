import { useState, useEffect } from 'react'
import './login.css'
//import CloseButton from 'react-bootstrap/CloseButton'
export default function Login(ShowLogin)
{

  const [formData, setFormData]=useState({
    email:'',
    password:'',
  })

  const {email, password}=formData

  const handleOnChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,[e.target.name]:[e.target.value]
    }))
  }

  const handleOnSubmit=(e)=>{
    e.preventDefault()
  }

    return(
  <div className={`${ShowLogin.ShowLogin ? "active" : ""} show`}>
      <div  className="login-form">
      <button className="close">X</button>
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
    </div>)
}