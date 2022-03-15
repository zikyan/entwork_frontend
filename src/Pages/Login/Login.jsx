// import { useState, useEffect } from 'react';
// import './login.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import { loginUser, reset } from "../../features/auth/authSlice";
// import Spinner from "../../Components/Spinner";
// //import CloseButton from 'react-bootstrap/CloseButton'
// export default function Login(ShowLogin)
// {

//   const [formData, setFormData]=useState({
//     email:'',
//     password:'',
//   })

//   const {email, password}=formData

//   const navigate=useNavigate()
//   const dispatch=useDispatch()

//   const {user, isLoading, isSuccess, isError, message}=useSelector((state)=>state.auth)

//   useEffect(()=>{
//     if(isError){
//       toast.error(message)
//     }
//     if(isSuccess){
//       navigate('/')
//     }
//     dispatch(reset())
//   },[user, isError, isSuccess, message, dispatch, navigate])

//   const handleOnChange=(e)=>{
//     setFormData((prevState)=>({
//       ...prevState,[e.target.name]:e.target.value
//     }))
//   }

//   const handleOnSubmit=(e)=>{
//     e.preventDefault()
//     const userData={
//       email,
//       password,
//     }
//     dispatch(loginUser(userData))
//   }

//   if(isLoading){
//     return <Spinner />
//   }

//     return(
//   // <div className={`${ShowLogin.ShowLogin ? "active" : ""} show`}>
//   <div>
//       {/* <div  className="login-form">
//       <button className="close">X</button>
//         <div className="form-box solid">
//           <form onSubmit={handleOnSubmit}>
//             <div className="bar">
//             <h1 className="login-text">Log In</h1>
//             </div>
//             <label>Email</label>
//             <br></br>
//             <input type="text"  name="email" value={email} onChange={handleOnChange} className="login-box" />
//             <br></br>
//             <label>Password</label>
//             <br></br>
//             <input type="password" name="password" value={password} onChange={handleOnChange} className="login-box" />
//             <br></br>
//             <div className="login-button-zik">
//             <input type="submit" value="LOGIN" className="login-btn" />
//             </div>
            
//           </form>
//         </div>
//       </div> */}

// <div class="modal fade1" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-centered" role="document">
//     <div class="modal-content">
//       <div class="modal-header border-bottom-0">
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         <div class="form-title text-center">
//           <h4>Login</h4>
//         </div>
//         <div class="d-flex flex-column text-center">
//           <form onSubmit={handleOnSubmit}>
//             <div class="form-group">
//             <input type="email"  name="email" value={email} onChange={handleOnChange} class="form-control" id="email1" placeholder="Enter Your Email" />
//             </div>
//             <div class="form-group">
              
                
//                 <input type="password"  name="password" value={password} onChange={handleOnChange} class="form-control" id="password1" placeholder="Enter Your Password" />
//             </div>
//             {/* <button type="submit" class="btn btn-info btn-block btn-round">Login</button> */}
//             <input type="submit" value="LOGIN" className="btn btn-info btn-block btn-round" />
//           </form>
          
//           <div class="text-center text-muted delimiter">or use a social network</div>
//           <div class="d-flex justify-content-center social-buttons">
//             <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
//               <i class="fab fa-twitter"></i>
//             </button>
//             <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
//               <i class="fab fa-facebook"></i>
//             </button>
//             <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
//               <i class="fab fa-linkedin"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


//     </div>)
// }