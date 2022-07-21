import React, { useState } from 'react'
import "./Posts.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';

export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postwrape">
            <div className="postTop">
                <div className="topleft">
                    <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" className="image" />
                    <span className="namepro">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="date">{post.date}</span>
                </div>
                <div className="topright">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="textpost">{post.desc}</span>
                <img src={post.photo} alt="" className="photo" />
            </div>
            <div className="postBottom">
                <div className="bottomleft">
                    <img src="assets/like.png" alt="" onClick={likeHandler} className="imag" />
                    <img src="assets/heart.png" alt="" onClick={likeHandler} className="imag" />
                    <span className="likecounter">{like} people like it</span>
                </div>
                <div className="bottomright">
                    <span className="comment">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
