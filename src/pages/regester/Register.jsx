import React from 'react'
import "./register.css"
export default function Register() {
  return (
    <div className='login'>
        <div className="loginwrapper">
          <div className="loginleft">
             <h3 className="loginlogo">SocialApp</h3>
             <spn className="loginspan">Connect with friends and the whole world arround you on SocialApp.</spn>
          </div>
          <div className="loginright"></div>
             <div className="loginbox">
                <input type="text" className="inputlogin" placeholder='Enter your Username'/>
                
                <input type="email" className="inputlogin" placeholder='Enter your Email'/>
                <input type="password" className="inputlogin" placeholder='Enter your Password'/>
                
                <button className="loginbtn">Sign Up</button>
                
                <button className="regeisterbtn">Log Into Your Account</button>
                
              </div> 
        </div>
    </div>
  )
}
