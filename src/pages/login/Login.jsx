import React from 'react'
import "./login.css"
export default function Login() {
  return (
    <div className='login'>
        <div className="loginwrapper">
          <div className="loginleft">
             <h3 className="loginlogo">SocialApp</h3>
             <spn className="loginspan">Connect with friends and the whole world arround you on SocialApp.</spn>
          </div>
          <div className="loginright"></div>
             <div className="loginbox">
                <input type="email" className="inputlogin" placeholder='Enter your Email'/>
                <input type="password" className="inputlogin" placeholder='Enter your Password'/>
                <button className="loginbtn">Log In</button>
                <span className="loginforget">Forget Password ?</span>
                <button className="regeisterbtn">Create a New Account</button>
                
              </div> 
        </div>
    </div>
  )
}
