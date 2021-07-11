import React from "react";
import Avatar from "../User/Avatar";
import "./Feed.css";

type FeedProps = {
  feed: Feed;
};
const Feed = ({ feed: { id, username, avatar, content, image, likes } }: FeedProps) => {
  return (
    <div className="Feed">
      <div className="Feed--UserInfo">
        <Avatar avatar={avatar} />
        <span>{username}</span>
      </div>
      <img src={image} alt="main"></img>
    </div>
  );
};

export default Feed;
