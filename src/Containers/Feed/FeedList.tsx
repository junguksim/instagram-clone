import { connect } from "react-redux";
import FeedList from "../../Components/Feed/FeedList";

function mapReduxStateToReactProps(state: DefaultStore) {
  return {
    feedList: state.feedList,
  };
}

export default connect(mapReduxStateToReactProps)(FeedList);
