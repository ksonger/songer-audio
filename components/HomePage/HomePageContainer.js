import {connect} from 'react-redux'
import HomePage from "./HomePage";

const mapStateToProps = (state) => {
  return { mobile: state.mobile };
};

const HomePageContainer = connect(mapStateToProps)(HomePage)
export default HomePageContainer