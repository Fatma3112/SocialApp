import React from 'react'
import "./friends.css"
export default function Friends({user}) {
  return (
    <li className="friend">
            <img src={user.profilePicture} alt="" className="image" />
            <span className="name">{user.username}</span>
          </li>
  )
}
