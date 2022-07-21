import React from 'react'
import "./Share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
export default function Share() {
  return (
    <div className='share'>
        <div className="sharewrape">
            <div className="sharetop">
              <img src="/assets/person/8.jpeg" alt="" className='profileImg'/>
              <input placeholder="what's in your mind?" className="shareInput" />
            </div>
            <hr />
            <div className="sharebottem">
                <div className="options">
                    <div className="option">
                        <PermMediaIcon htmlColor='tomato' className='icon'/>
                        <span className='textshare'>Photo or Video</span>
                    </div>
                    <div className="option">
                        <LabelIcon htmlColor='blue' className='icon'/>
                        <span className='textshare'>Tag</span>
                    </div>
                    <div className="option">
                        <LocationOnIcon htmlColor='green' className='icon'/>
                        <span className='textshare'>Location</span>
                    </div>
                    <div className="option">
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='icon'/>
                        <span className='textshare'>Feelings</span>
                    </div>
                </div>
                <button className="btnshare">Share</button>
            </div>
        </div>
    </div>
  )
}
