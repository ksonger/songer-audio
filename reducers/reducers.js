import {combineReducers} from 'redux'
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
      const path = '/' + window.location.pathname.split('/')[1]
      if (path !== action.path) {
        //navigate(action.path)
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

const newsPostsReducer = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch(action.type) {
    case types.FETCH_NEWSPOSTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.POPULATE_NEWSPOSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.newsposts,
      });
    default:
      return state;
  }
};

const reducers = {
  activePage: activePageReducer,
  menuItems: menuItemsReducer,
  mobile: mobileReducer,
  activeProduct: activeProductReducer,
  newsposts: newsPostsReducer
}

export default combineReducers(reducers)