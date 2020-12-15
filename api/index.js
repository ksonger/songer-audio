import {API} from "aws-amplify";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {listMenuItemLists, listNewsPosts, getNewsPost} from "../src/graphql/queries";

/**
 * Fetch the current site menu
 * @returns {Promise<{menuitems: []}|{menuitems: *}>}
 */
export const fetchMenuItems = async () => {
  let result;
  try {
    result = await API.graphql(graphqlOperation(listMenuItemLists))
  } catch (err) {
    console.warn(err)
    return {
      menuitems: []
    }
  }
  if (result.errors) {
    console.warn("Failed to fetch menu items. ", result.errors)
    return {
      menuitems: []
    }
  }
  if (result.data) {
    return {
      menuitems: result.data.listMenuItemLists.items
    }
  }
}

/**
 * Fetch posts for the news page
 * @returns {Promise<[]>}
 */
export const fetchNews = async (options) => {
  let result = [];
  let response;
  try {
    if(options.id)  {
      response = await API.graphql((graphqlOperation(getNewsPost, options.id)));
    } else {
      response = await API.graphql((graphqlOperation(listNewsPosts)));
    }
  } catch(err) {
    console.warn("Failed to fetch menu items. ", err);
    return result;
  }
  if(response.errors) {
    console.warn("Failed to fetch menu items. ", response.errors);
  }
  if(response.data) {
    if(options.id)  {
      result = response.data.getNewsPost.items;
    } else {
      result = response.data.listNewsPosts.items;
    }
  }
  return result;
}