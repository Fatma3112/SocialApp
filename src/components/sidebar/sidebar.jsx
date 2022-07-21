import React from 'react'
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import Friends from '../friends/Friends';
import { Users } from '../../dummyData';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarwraber">
        <ul className="sidebarlist">
          <li className="sidebaritem">
            <RssFeedIcon className='feedicon'/>
            <span className="text">Feed</span>
          </li>
          <li className="sidebaritem">
            <ChatIcon className='feedicon'/>
            <span className="text">Chat</span>
          </li>
          <li className="sidebaritem">
            <VideoLibraryIcon className='feedicon'/>
            <span className="text">Videos</span>
          </li>
          <li className="sidebaritem">
            <GroupsIcon className='feedicon'/>
            <span className="text">Groups</span>
          </li>
          <li className="sidebaritem">
            <BookmarksIcon className='feedicon'/>
            <span className="text">Bookmarks</span>
          </li>
          <li className="sidebaritem">
            <QuestionMarkIcon className='feedicon'/>
            <span className="text">Questions</span>
          </li>
          <li className="sidebaritem">
            <WorkOutlineIcon className='feedicon'/>
            <span className="text">Jobs</span>
          </li>
          <li className="sidebaritem">
            <EventIcon className='feedicon'/>
            <span className="text">Events</span>
          </li>
          <li className="sidebaritem">
            <SchoolIcon className='feedicon'/>
            <span className="text">Courses</span>
          </li>
        </ul>
        <button className="btn">Show More</button>
        <hr />
        <ul className="friends">
          
         {Users.map(u=>(
          <Friends key={u.id} user={u} />
         ))}
        </ul>
        
      </div>
    </div>
  )
}
