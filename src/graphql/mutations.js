/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewsPost = /* GraphQL */ `
  mutation CreateNewsPost(
    $input: CreateNewsPostInput!
    $condition: ModelNewsPostConditionInput
  ) {
    createNewsPost(input: $input, condition: $condition) {
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
export const updateNewsPost = /* GraphQL */ `
  mutation UpdateNewsPost(
    $input: UpdateNewsPostInput!
    $condition: ModelNewsPostConditionInput
  ) {
    updateNewsPost(input: $input, condition: $condition) {
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
export const deleteNewsPost = /* GraphQL */ `
  mutation DeleteNewsPost(
    $input: DeleteNewsPostInput!
    $condition: ModelNewsPostConditionInput
  ) {
    deleteNewsPost(input: $input, condition: $condition) {
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
export const createSubscriber = /* GraphQL */ `
  mutation CreateSubscriber(
    $input: CreateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    createSubscriber(input: $input, condition: $condition) {
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
export const updateSubscriber = /* GraphQL */ `
  mutation UpdateSubscriber(
    $input: UpdateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    updateSubscriber(input: $input, condition: $condition) {
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
export const deleteSubscriber = /* GraphQL */ `
  mutation DeleteSubscriber(
    $input: DeleteSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    deleteSubscriber(input: $input, condition: $condition) {
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
