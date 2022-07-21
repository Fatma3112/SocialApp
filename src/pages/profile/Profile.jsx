import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/topbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';
export default function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="cover">
            <img className='profileCover' src="assets/post/3.jpeg" alt="" />
            <img className='profileUserImg' src="assets/person/8.jpeg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="myName">Fatma Abdo</h4>
                <span className="porofDesc">U always has a chance to write a new chapter👌🏻 u are the author of ur story🖤</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed />
     <Rightbar profile/>
        </div>
    
    </div>
    
    </div>

    </>
  )
}
