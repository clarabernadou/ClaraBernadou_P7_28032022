import "./post.css";
import { MoreVert } from '@mui/icons-material';
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [dislike,setDislike] = useState(post.dislike)
  const [isLiked,setIsLiked] = useState(false)
  const [isDisliked,setIsDisliked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
    setDislike(isDisliked ? dislike-1 : dislike+1)
    setIsDisliked(!isDisliked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <div className="postInfosContainer">
              <div className="postName">
              <span className="postProfileName">
                {Users.filter((u) => u.id === post?.userId)[0].username}
              </span>
            </div>
            </div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <img className="postImg" src={post.photo} alt="" />
          <span className="postText">{post?.desc}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="postCommentText">{post.comment} comments</span>
            
          </div>
          <div className="postBottomRight">
            <img className="likeIcon" src="" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{dislike}</span>
            <img className="likeIcon" src="" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
