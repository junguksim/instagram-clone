import React from "react";
import CreateComment from "../Comment/CreateComment";
import "./Feed.css";

type FeedProps = {
  feed: Feed;
};
const Feed = ({ feed: { id, username, avatar, content, image, likes, createdAt } }: FeedProps) => {
  return (
    <div className="Feed">
      <div className="Feed--UserInfo">
        <img src={avatar} alt="avatar" className="Avatar"></img>
        <span className="UserName">{username}</span>
      </div>
      <img src={image} alt="main" className="MainImage"></img>
      <div className="Feed--Content">
        <p>
          <b>좋아요 {likes}개</b>
        </p>
        <span>
          <b>{username}</b> {content}
        </span>
        <p className="CreatedAt">{createdAt}</p>
        <CreateComment />
      </div>
    </div>
  );
};

export default Feed;
