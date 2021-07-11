import React from "react";
import FeedList from "../../Containers/Feed/FeedList";
import StoryList from "../../Containers/StoryList/StoryList";
import NavBar from "../NavBar/NavBar";
import UserRecommendMain from "../UserRecommend/UserRecommendMain";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <StoryList />
        <FeedList />
        <UserRecommendMain />
      </div>
    </>
  );
}

export default App;
