import { connect } from 'react-redux'
import SiteMenu from "./SiteMenu";

const mapStateToProps = (state) => {
  return {
    menuItems: state.menuItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (item) => {
      console.log(item)
    }
  }
}

const Menu = connect(mapStateToProps, mapDispatchToProps)(SiteMenu)

export default Menu