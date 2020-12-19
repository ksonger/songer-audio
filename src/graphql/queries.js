/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewsPost = /* GraphQL */ `
  query GetNewsPost($id: ID!) {
    getNewsPost(id: $id) {
      id
      slug
      title
      summary
      content
      images
      date
      createdAt
      updatedAt
    }
  }
`;
export const listNewsPosts = /* GraphQL */ `
  query ListNewsPosts(
    $filter: ModelNewsPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        title
        summary
        content
        images
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubscriber = /* GraphQL */ `
  query GetSubscriber($id: ID!) {
    getSubscriber(id: $id) {
      id
      given_name
      family_name
      email
      phone_number
      phone_number_verified
      email_verified
      createdAt
      updatedAt
    }
  }
`;
export const listSubscribers = /* GraphQL */ `
  query ListSubscribers(
    $filter: ModelSubscriberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscribers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        given_name
        family_name
        email
        phone_number
        phone_number_verified
        email_verified
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
