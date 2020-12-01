import {connect} from 'react-redux'
import {navigate} from "../../utils/navigation";
import { setMenuItemActive } from "../../actions/actions";
import HomePageCard from "./HomePageCard";


const mapDispatchToProps = (dispatch) => ({
  clickAction: (p) => {
    dispatch(setMenuItemActive({
      id: p.eventKey,
      label: p.children,
      path: p.path
    }))
    navigate(p.path)
  },
})

const HomePageCardContainer = connect(null, mapDispatchToProps)(HomePageCard)

export default HomePageCardContainer