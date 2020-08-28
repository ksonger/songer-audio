import {fetchMenuItems} from "../api";

const receiveMenu = (response) => {
  return {
    type: 'POPULATE_MENU',
    menuItems: response.menuitems
  }
}

export const getMenu = async() => {
  return new Promise((resolve, reject) => {
    fetchMenuItems()
      .then((response) => {
        resolve(receiveMenu(response))
      })
  })
}