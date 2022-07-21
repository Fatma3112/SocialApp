import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Topbar() {
    return (
        <div className="topbarContainer">
        <div className="topbarLeft">
        <span className="logo">SocialApp</span>
        </div>
        <div className="topbarCenter">
        <div className="searchbar">
        <SearchIcon className='search'/>
        <input className="searchinput" placeholder="Search for friends,post or video"/>
        </div>
        </div>
        <div className="topbarRight">
        <div className="topbarlinks">
        <span className="topbarlink">HomePage</span>
        <span className="topbarlink">TimeLine</span>
        </div>
        <div className="topbaricons">
        <div className="topbariconitem">
         <PersonIcon />
        <span className="topbarcounter">1</span>
        </div>
        <div className="topbariconitem">
         <ChatIcon />
        <span className="topbarcounter">1</span>
        </div>
        <div className="topbariconitem">
         <NotificationsIcon />
        <span className="topbarcounter">1</span>
        </div>
        </div>
        <img className="topbarimg" src="/assets/person/8.jpeg" alt="profileImg" />
        </div>

         </div>
    )
}
