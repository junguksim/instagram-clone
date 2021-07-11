import React from "react";

type AvatarProps = {
  avatar: string;
};
const Avatar = ({ avatar }: AvatarProps) => {
  return (
    <div className="Avatar">
      <a href="/">
        <img src={avatar} alt="avatar"></img>
      </a>
    </div>
  );
};

export default Avatar;
