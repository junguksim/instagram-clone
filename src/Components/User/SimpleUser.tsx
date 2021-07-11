import React from "react";
import Avatar from "./Avatar";
import "./SimpleUser.css";

type SimpleUserProps = {
  userInfo: UserSimpleInfo;
};

const SimpleUser = ({ userInfo: { avatar, username } }: SimpleUserProps) => {
  return (
    <div className="SimpleUser">
      <Avatar avatar={avatar} />
      <span>{username.length > 8 ? username.substring(0, 6) + "..." : username}</span>
    </div>
  );
};

export default SimpleUser;
