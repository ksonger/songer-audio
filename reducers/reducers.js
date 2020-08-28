import { combineReducers } from 'redux'
import * as types from '../constants/types'

const menuItemsReducer = (state = [], action) => {
  console.log('action type: ' + action.type)
  switch(action.type) {
    case 'POPULATE_MENU':
      return action.menuItems
    default:
      return state
  }
}

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    case types.RESET:
      return 0
    default:
      return state
  }
}

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
  menuItems: menuItemsReducer
}

export default combineReducers(reducers)