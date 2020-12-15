/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMenuItem = /* GraphQL */ `
  query GetMenuItem($id: ID!) {
    getMenuItem(id: $id) {
      id
      sortOrder
      label
      description
      path
      isVisible
      createdAt
      updatedAt
    }
  }
`;
export const listMenuItems = /* GraphQL */ `
  query ListMenuItems(
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sortOrder
        label
        description
        path
        isVisible
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMenuItemList = /* GraphQL */ `
  query GetMenuItemList($id: ID!) {
    getMenuItemList(id: $id) {
      id
      sortOrder
      label
      description
      path
      isVisible
      createdAt
      updatedAt
    }
  }
`;
export const listMenuItemLists = /* GraphQL */ `
  query ListMenuItemLists(
    $filter: ModelMenuItemListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuItemLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sortOrder
        label
        description
        path
        isVisible
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
