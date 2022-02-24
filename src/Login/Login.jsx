import React from "react";
import './login.css'
import CloseButton from 'react-bootstrap/CloseButton'
export default function Login(ShowLogin)
{

    return(
  <div className={`${ShowLogin.ShowLogin ? "active" : ""} show`}>
      <div  className="login-form">
      <button className="close">X</button>
        <div className="form-box solid">
          <form>
            <div className="bar">
            <h1 className="login-text">Log In</h1>
            </div>
            <label>Username</label>
            <br></br>
            <input type="text"  name="username" className="login-box" />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
    </div>)
}