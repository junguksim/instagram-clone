import React from "react";
import StoryList from "../../Story/StoryList";
import FeedList from "../Feed/FeedList";
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
