import {API} from "aws-amplify";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {listMenuItemLists} from "../src/graphql/queries";

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

function importAll (r) {
  return r.keys().map((fileName) => {
    return {
      link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
      module: r(fileName)
    }
  });
}

export const posts = importAll(
  require.context("../pages/news/blog/", true, /\.mdx$/)
);