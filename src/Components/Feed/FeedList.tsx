import React from "react";
import Feed from "./Feed";
import "./FeedList.css";

type FeedListProps = {
  feedList: Feed[];
};

const FeedList = ({ feedList }: FeedListProps) => {
  return (
    <div className="FeedList">
      {feedList.map((feed: Feed) => {
        return <Feed feed={feed} />;
      })}
    </div>
  );
};

export default FeedList;
