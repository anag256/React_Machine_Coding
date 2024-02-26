import React, { useState } from "react";
import './Comment.css';
function Comment({commentData}) {
    const [showReplies,setShowReplies]=useState(false);
  return (
    <div className="commentContainer">
      <div className="profile">
        <img src={commentData?.image} alt="avatar" />
        <h5>{commentData?.name}</h5>
      </div>
      <div className="comment">
        <p>{commentData?.text}</p>

       {commentData.replies.length!==0 && <button onClick={()=>setShowReplies((prev)=>!prev)}>{showReplies ?  'Hide replies' :'Show Replies'}</button> }
        {
        showReplies &&
            commentData.replies.map(replyComment=>{
                return <Comment  key ={replyComment.comment_id} commentData={replyComment}/>
            })
        }
      </div>
    </div>
  );
}

export default Comment;
