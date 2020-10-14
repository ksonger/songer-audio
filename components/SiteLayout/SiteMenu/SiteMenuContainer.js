import SiteMenu from "./SiteMenu";
import {connect} from 'react-redux'
import { setMenuItemActive } from "../../../actions/actions";

const mapDispatchToProps = (dispatch) => ({
  clickAction: (props) => {
    dispatch(setMenuItemActive({
      id: props.eventKey,
      label: props.children,
      path: props.path
    }))
  },
  pageLoad: (item) => {
    if(item)  {
      dispatch(setMenuItemActive(item))
    }
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
    mobile: state.mobile
  }
}

const SiteMenuContainer = connect(mapStateToProps, mapDispatchToProps)(SiteMenu)

export default SiteMenuContainer