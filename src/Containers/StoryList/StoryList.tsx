import { connect } from "react-redux";
import StoryList from "../../Components/Story/StoryList";

function mapReduxStateToReactProps(state: DefaultStore) {
  return {
    storyList: state.storyList,
  };
}
export default connect(mapReduxStateToReactProps)(StoryList);
