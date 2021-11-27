/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPages = /* GraphQL */ `
  query GetPages {
    getPages {
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
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
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
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        index
        label
        slug
        uri
        contentBlocks {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContentBlock = /* GraphQL */ `
  query GetContentBlock($id: ID!) {
    getContentBlock(id: $id) {
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
export const listContentBlocks = /* GraphQL */ `
  query ListContentBlocks(
    $filter: ModelContentBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getSpec = /* GraphQL */ `
  query GetSpec($id: ID!) {
    getSpec(id: $id) {
      id
      label
      value
      createdAt
      updatedAt
    }
  }
`;
export const listSpecs = /* GraphQL */ `
  query ListSpecs(
    $filter: ModelSpecFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNewsPost = /* GraphQL */ `
  query GetNewsPost($id: ID!) {
    getNewsPost(id: $id) {
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
        comments
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
export const byPage = /* GraphQL */ `
  query ByPage(
    $pageId: String
    $sortDirection: ModelSortDirection
    $filter: ModelContentBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byPage(
      pageId: $pageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
