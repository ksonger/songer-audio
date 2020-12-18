import SiteMenu from "./SiteMenu";
import {connect} from 'react-redux'
import {navigate} from "../../../utils/navigation";

const mapDispatchToProps = () => ({
  clickAction: (props) => {
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