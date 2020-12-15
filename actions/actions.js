import {fetchMenuItems, fetchNews} from "../api";
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

const requestNewsPosts = () => {
  return {
    type: types.FETCH_NEWSPOSTS
  }
}

/**
 * Receives posts
 * @param items
 * @param count
 * @returns {{type: string, posts: *}}
 */
const receiveNewsPosts = (items, count = 1) => {
  items = items.sort((a, b) => a.createdAt - b.createdAt)
  return {
    type: types.POPULATE_NEWSPOSTS,
    newsposts: items.slice(0, count)
  }
};

const POST_COUNT = 10;

/**
 * Fetches news posts
 * @param options
 * @param count
 * @returns {function(...[*]=)}
 */
const fetchNewsPosts = (options, count) => {
  options = options || {}
  count = count || POST_COUNT
  return dispatch => {
    // set isFetching to true
    dispatch(requestNewsPosts())
    // api request
    fetchNews(options)
      .then((items) => {
        return items
      })
      .then((items) => {
        // dispatch action to update state with posts
        dispatch(receiveNewsPosts(items, count))
      })
      .catch((err) => {
        console.log('error', err)
      })
  };
};

export {setMenuItemActive, setProductActive, getMenu, setFormFactor, fetchNewsPosts, receiveNewsPosts}