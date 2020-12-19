import {API} from "aws-amplify";
import {graphqlOperation} from "@aws-amplify/api-graphql";
import {listNewsPosts, getNewsPost} from "../src/graphql/queries";
import {createSubscriber, updateSubscriber} from "../src/graphql/mutations";
import axios from "axios";
import paths from '../constants/paths'

/**
 * Fetch posts for the news page
 * @returns {Promise<[]>}
 */
export const fetchNews = async (options) => {
  let result = [];
  let response;
  try {
    if (options.id) {
      response = await API.graphql((graphqlOperation(getNewsPost, options.id)));
    } else {
      response = await API.graphql((graphqlOperation(listNewsPosts)));
    }
  } catch (err) {
    console.warn("Failed to fetch menu items. ", err);
    return result;
  }
  if (response.errors) {
    console.warn("Failed to fetch menu items. ", response.errors);
  }
  if (response.data) {
    if (options.id) {
      result = response.data.getNewsPost.items;
    } else {
      result = response.data.listNewsPosts.items;
    }
  }
  return result;
}

/**
 * Add a new subscriber
 * @param subscriber
 * @returns {Promise<void>}
 */
export const createSubscription = async (subscriber) => {
  try {
    await API.graphql((graphqlOperation(createSubscriber, { input: subscriber })));
  } catch (err) {
    console.warn('Failed to create new subscriber.', err)
  }
}

/**
 * Update an existing subscriber
 * @param subscriber
 * @returns {Promise<void>}
 */
export const updateSubscription = async (subscriber) => {
  try {
    await API.graphql((graphqlOperation(updateSubscriber, { input: subscriber })));
  } catch (err) {
    console.warn('Failed to update subscriber.', err)
  }
}

export const sendComments = async (data) => {
  const req = {
    url: paths.COMMENTS_API,
    headers: { 'content-type': 'application/json' },
    method: 'POST',
    data: data,
  }

  return new Promise((resolve, reject) => {
    axios(req)
      .then(() => {
        resolve('Your comments were sent successfully, thank you.')
      })
      .catch((error) => {
        console.warn(error)
        reject("We're sorry, unfortunately an error occurred.  Please, send us an email at 'info@songeraudio.com")
      })
  })

}