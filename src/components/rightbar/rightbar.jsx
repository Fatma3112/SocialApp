import React from 'react'
import "./rightbar.css"
import Online from '../online/Online'
import { Users } from '../../dummyData'
export default function Rightbar({profile}) {
  const homeRightBar = ()=> {
    return(
    <>
     <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="photobirth" />
          <span className="textbirth"><strong>Jemy Joe</strong> and <strong>2 other friends</strong>  have a birthday today</span>
        </div>
        <img src="assets/ad.png" alt="" className='add'/>
        <h4 className="titleRight">Online Friends</h4>
        <ul className="friendlistsRight">
          {Users.map(u=>(
           <Online user={u} key={u.id} /> 
        ))}

        

        </ul>
    </>
  )} 

  const profileRightBar = ()=> {
    return(
    <>
     <h4 className="rightBarTitle">User information</h4>
     <div className="rightBarInfo">
      <div className="rightBarInfoItem">
        <span className="infoKey">City:</span>
        <span className="infoVal">Egypt</span>
      </div>
      <div className="rightBarInfoItem">
        <span className="infoKey">From:</span>
        <span className="infoVal">Alexandria</span>
      </div>
      <div className="rightBarInfoItem">
        <span className="infoKey">Relationship:</span>
        <span className="infoVal">Married</span>
      </div>
     </div>
     <h4 className="rightBarTitle">User Friends</h4>
     <div className="rightBarFollowings">
     <div className="rightBarFollowing">
      <img src="" alt="" className="followingImg" />
      <span className="followingName"></span>
     </div>
     </div>
    </>
  )}
  return (
    <div className='rightbar'>
      <div className="wrapper">
       {profile ? <profileRightBar/> : <homeRightBar/>}
      </div>
    </div>
  )
}
