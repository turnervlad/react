import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://pbs.twimg.com/profile_images/526466900906483713/JnQyyh9P_400x400.jpeg"
        alt="ss"
      />
      {props.message}
      <div>
        <span>likes:  {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
