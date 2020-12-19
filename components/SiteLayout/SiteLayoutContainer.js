import SiteLayout from "./SiteLayout";
import {connect} from 'react-redux'
import {setFormFactor} from "../../actions/actions";
import responsive from "../../constants/responsive";

const mapDispatchToProps = (dispatch) => ({
  formFactor: () => {
    dispatch(setFormFactor(responsive.BREAKPOINT))
  }
})

const SiteLayoutContainer = connect(null, mapDispatchToProps)(SiteLayout)

export default SiteLayoutContainer