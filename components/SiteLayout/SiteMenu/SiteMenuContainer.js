import SiteMenu from "./SiteMenu";
import {connect} from 'react-redux'
import { setMenuItemActive } from "../../../actions/actions";
import {navigate} from "../../../utils/navigation";

const mapDispatchToProps = (dispatch) => ({
  clickAction: (props) => {
    dispatch(setMenuItemActive({
      id: props.eventKey,
      label: props.children,
      path: props.path
    }))
    navigate(props.path)
  }
})

const mapStateToProps = (state) => {
  return {
    mobile: state.mobile
  }
}

const SiteMenuContainer = connect(mapStateToProps, mapDispatchToProps)(SiteMenu)

export default SiteMenuContainer