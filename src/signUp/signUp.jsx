import React from "react";
import './signUp.css'

export default function SignUp(ShowsignUp)
{
  

    return( 
   <div className={`${ShowsignUp.ShowsignUp? "active" : ""} show`}>
     
    <div  className="login-form2">
    <button className="close2">X</button>
      <div className="form-box2 solid">
        <form>
          <h1 className="login-text2">Sign Up</h1>
          <label>Username</label>
          <br></br>
          <input type="text"  name="username" className="login-box2" />
          <br></br>
          <label>Password</label>
          <br></br>
          <input type="password" name="password" className="login-box2" />
          <br></br>
          <input type="submit" value="SIGN UP" className="login-btn2" />
        </form>
      </div>
    </div>
  </div>
    )
}