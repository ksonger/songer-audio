import {fetchMenuItems} from "../api";
import * as types from '../constants/types'


const setMenuItemActive = (item) => {
  return {
    type: types.HIGHLIGHT_MENU,
    id: item.id,
    label: item.label,
    path: item.path
  }
}

const setProductActive = (item) => {
  return {
    type: types.SET_ACTIVE_PRODUCT,
    activeProduct: item.activeProduct
  }
}

const requestMenu = () => {
  return {
    type: types.REQUEST_MENU
  }
}

const receiveMenu = (items) => {
  items = items.sort((a, b) => a.sortOrder - b.sortOrder).filter(item => item.isVisible)
  return {
    type: types.POPULATE_MENU,
    menuItems: items
  }
}

const getMenu = () => {
  return (dispatch) => {
    dispatch(requestMenu())
    return fetchMenuItems()
      .then((response) => {
        return response.menuitems
      })
      .then((items) => {
        dispatch(receiveMenu(items))
      })
  }
}

const setFormFactor = () => {
  return {
    type: types.FORM_FACTOR,
    bp: 'sm'
  }
}

export {setMenuItemActive, setProductActive, getMenu, setFormFactor}