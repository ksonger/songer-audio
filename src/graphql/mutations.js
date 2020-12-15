/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem(
    $input: CreateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    createMenuItem(input: $input, condition: $condition) {
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
export const updateMenuItem = /* GraphQL */ `
  mutation UpdateMenuItem(
    $input: UpdateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    updateMenuItem(input: $input, condition: $condition) {
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
export const deleteMenuItem = /* GraphQL */ `
  mutation DeleteMenuItem(
    $input: DeleteMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    deleteMenuItem(input: $input, condition: $condition) {
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
export const createMenuItemList = /* GraphQL */ `
  mutation CreateMenuItemList(
    $input: CreateMenuItemListInput!
    $condition: ModelMenuItemListConditionInput
  ) {
    createMenuItemList(input: $input, condition: $condition) {
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
export const updateMenuItemList = /* GraphQL */ `
  mutation UpdateMenuItemList(
    $input: UpdateMenuItemListInput!
    $condition: ModelMenuItemListConditionInput
  ) {
    updateMenuItemList(input: $input, condition: $condition) {
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
export const deleteMenuItemList = /* GraphQL */ `
  mutation DeleteMenuItemList(
    $input: DeleteMenuItemListInput!
    $condition: ModelMenuItemListConditionInput
  ) {
    deleteMenuItemList(input: $input, condition: $condition) {
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
