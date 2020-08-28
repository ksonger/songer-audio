import * as types from '../constants/types'
import {fetchMenuItems} from "../api";

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  })

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
  }, 1000)

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })

const requestMenu = () => {
  return {
    type: 'REQUEST_MENU'
  }
}


export const receiveMenu = (items) => {
  items = items.sort((a, b) => a.sortOrder - b.sortOrder).filter(item => item.isVisible)
  return {
    type: 'POPULATE_MENU',
    menuItems: items
  }
}

export const getMenu = () => {
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