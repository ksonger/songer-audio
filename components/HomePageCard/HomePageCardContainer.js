import {connect} from 'react-redux'
import {navigate} from "../../utils/navigation";
import { setMenuItemActive, setProductActive } from "../../actions/actions";
import HomePageCard from "./HomePageCard";
import paths from '../../constants/paths'
import * as types from "../../constants/types";


const mapDispatchToProps = (dispatch) => ({
  clickAction: (p) => {
    dispatch(setMenuItemActive({
      id: p.eventKey,
      label: p.children,
      path: p.path
    }))
    if(p.path === paths.PRODUCTS.ENSO) {
      dispatch(setProductActive({
        type: types.SET_ACTIVE_PRODUCT,
        activeProduct: 'enso'
      }))
    }
    navigate(p.path)
  },
})

const HomePageCardContainer = connect(null, mapDispatchToProps)(HomePageCard)

export default HomePageCardContainer