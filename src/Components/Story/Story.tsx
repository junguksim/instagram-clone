import React, { useState } from "react";
import "./Story.css";

type StoryProps = {
  storyInfo: Story;
};
const Story = ({ storyInfo: { id, username, avatar, story } }: StoryProps) => {
  const [showStory, setShowStory] = useState(false);

  const showStoryHandler = (e: React.MouseEvent): void => {
    e.preventDefault();
    setShowStory(!showStory);
  };
  return (
    <div className="StoryComponent">
      <span onClick={showStoryHandler}>
        <img src={avatar} alt="avatar" className="Avatar--Story"></img>
      </span>
      <span className="UserName">
        {username.length > 10 ? username.substring(0, 10) + "..." : username}
      </span>

      {showStory ? (
        <div className="StoryBackground" onClick={showStoryHandler}>
          <div className="Story">
            <div className="Story--Header">
              <img src={avatar} alt="avatar" className="Avatar--InStory"></img>
              <span className="UserName--InStory">{username}</span>
            </div>
            <img src={story} alt="show-story" className="StoryContent" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Story;
