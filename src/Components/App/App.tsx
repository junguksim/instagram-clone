import React from "react";
import FeedList from "../../Containers/Feed/FeedList";
import StoryList from "../../Containers/StoryList/StoryList";
import NavBar from "../NavBar/NavBar";
import UserRecommendMain from "../UserRecommend/UserRecommendMain";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="MainContainer">
        <div className="LeftContainer">
          <StoryList />
          <FeedList />
        </div>
        <div className="RightContainer">
          <UserRecommendMain />
        </div>
      </div>
    </div>
  );
}

export default App;
