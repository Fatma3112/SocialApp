import React from 'react'
import "./online.css" 

export default function Online({user}) {
  return (
    <li className="friendright">
    <div className="profileImgContainer">
      <img src={user.profilePicture} alt="" className="imgContainer" />
      <span className="rightOnline"></span>
    </div>
    <span className="rightUsername">{user.username}</span>
   </li>
  )
}
