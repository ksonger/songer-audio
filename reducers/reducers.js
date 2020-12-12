import {combineReducers} from 'redux'
import {navigate} from "../utils/navigation";
import * as types from '../constants/types'
import responsive from "../constants/responsive";

const menuItemsReducer = (state = [], action) => {
  switch(action.type) {
    case types.POPULATE_MENU:
      return action.menuItems
    default:
      return state
  }
}

const activePageReducer = (state = {
  id: '0',
  label: 'home',
  path: '/'
}, action) => {
  switch(action.type) {
    case types.HIGHLIGHT_MENU:
      if (window.location.pathname !== action.path) {
        navigate(action.path)
      }
      return Object.assign({}, state, {
        id: action.id,
        label: action.label,
        path: action.path
      })
    default:
      return state
  }
}

const activeProductReducer = (state = 'enso'
, action) => {
  switch(action.type) {
    case types.SET_ACTIVE_PRODUCT:
      return action.activeProduct
    default:
      return state
  }
}

const mobileReducer = (state = false, action) => {
  switch(action.type) {
    case types.FORM_FACTOR:
      return window.innerWidth <= responsive.BREAKPOINTS[action.bp]
    default:
      return state
  }
}

const reducers = {
  activePage: activePageReducer,
  menuItems: menuItemsReducer,
  mobile: mobileReducer,
  activeProduct: activeProductReducer
}

export default combineReducers(reducers)