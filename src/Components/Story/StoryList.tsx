import React from "react";
import Story from "./Story";
import "./StoryList.css";

type StoryListProps = {
  storyList: Story[];
};
const StoryList = ({ storyList }: StoryListProps) => {
  return (
    <div className="StoryList">
      {storyList.map((storyInfo: Story) => {
        return <Story storyInfo={storyInfo} key={storyInfo.id} />;
      })}
    </div>
  );
};

export default StoryList;
