/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
      id
      index
      label
      slug
      uri
      contentBlocks {
        items {
          id
          pageId
          sortOrder
          type
          title
          header
          subheader
          body
          html
          images
          layout
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
      id
      index
      label
      slug
      uri
      contentBlocks {
        items {
          id
          pageId
          sortOrder
          type
          title
          header
          subheader
          body
          html
          images
          layout
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
      id
      index
      label
      slug
      uri
      contentBlocks {
        items {
          id
          pageId
          sortOrder
          type
          title
          header
          subheader
          body
          html
          images
          layout
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createContentBlock = /* GraphQL */ `
  mutation CreateContentBlock(
    $input: CreateContentBlockInput!
    $condition: ModelContentBlockConditionInput
  ) {
    createContentBlock(input: $input, condition: $condition) {
      id
      pageId
      sortOrder
      type
      title
      header
      subheader
      body
      html
      images
      layout
      specs {
        id
        label
        value
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateContentBlock = /* GraphQL */ `
  mutation UpdateContentBlock(
    $input: UpdateContentBlockInput!
    $condition: ModelContentBlockConditionInput
  ) {
    updateContentBlock(input: $input, condition: $condition) {
      id
      pageId
      sortOrder
      type
      title
      header
      subheader
      body
      html
      images
      layout
      specs {
        id
        label
        value
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteContentBlock = /* GraphQL */ `
  mutation DeleteContentBlock(
    $input: DeleteContentBlockInput!
    $condition: ModelContentBlockConditionInput
  ) {
    deleteContentBlock(input: $input, condition: $condition) {
      id
      pageId
      sortOrder
      type
      title
      header
      subheader
      body
      html
      images
      layout
      specs {
        id
        label
        value
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSpec = /* GraphQL */ `
  mutation CreateSpec(
    $input: CreateSpecInput!
    $condition: ModelSpecConditionInput
  ) {
    createSpec(input: $input, condition: $condition) {
      id
      label
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateSpec = /* GraphQL */ `
  mutation UpdateSpec(
    $input: UpdateSpecInput!
    $condition: ModelSpecConditionInput
  ) {
    updateSpec(input: $input, condition: $condition) {
      id
      label
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpec = /* GraphQL */ `
  mutation DeleteSpec(
    $input: DeleteSpecInput!
    $condition: ModelSpecConditionInput
  ) {
    deleteSpec(input: $input, condition: $condition) {
      id
      label
      value
      createdAt
      updatedAt
    }
  }
`;
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
      comments
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
      comments
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
      comments
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
