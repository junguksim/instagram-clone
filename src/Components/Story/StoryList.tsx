import React from "react";
import SimpleUser from "../User/SimpleUser";
import "./StoryList.css";

type StoryListProps = {
  storyList: StoryList;
};
const StoryList = ({ storyList: { friendList } }: StoryListProps) => {
  console.log(friendList);
  return (
    <div className="StoryList">
      {friendList.map((friend: UserSimpleInfo) => {
        return <SimpleUser userInfo={friend} key={friend.id} />;
      })}
    </div>
  );
};

export default StoryList;
