/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage {
    onCreatePage {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage {
    onUpdatePage {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage {
    onDeletePage {
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
export const onCreateContentBlock = /* GraphQL */ `
  subscription OnCreateContentBlock {
    onCreateContentBlock {
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
export const onUpdateContentBlock = /* GraphQL */ `
  subscription OnUpdateContentBlock {
    onUpdateContentBlock {
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
export const onDeleteContentBlock = /* GraphQL */ `
  subscription OnDeleteContentBlock {
    onDeleteContentBlock {
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
export const onCreateSpec = /* GraphQL */ `
  subscription OnCreateSpec {
    onCreateSpec {
      id
      label
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSpec = /* GraphQL */ `
  subscription OnUpdateSpec {
    onUpdateSpec {
      id
      label
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSpec = /* GraphQL */ `
  subscription OnDeleteSpec {
    onDeleteSpec {
      id
      label
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNewsPost = /* GraphQL */ `
  subscription OnCreateNewsPost {
    onCreateNewsPost {
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
export const onUpdateNewsPost = /* GraphQL */ `
  subscription OnUpdateNewsPost {
    onUpdateNewsPost {
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
export const onDeleteNewsPost = /* GraphQL */ `
  subscription OnDeleteNewsPost {
    onDeleteNewsPost {
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
export const onCreateSubscriber = /* GraphQL */ `
  subscription OnCreateSubscriber {
    onCreateSubscriber {
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
export const onUpdateSubscriber = /* GraphQL */ `
  subscription OnUpdateSubscriber {
    onUpdateSubscriber {
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
export const onDeleteSubscriber = /* GraphQL */ `
  subscription OnDeleteSubscriber {
    onDeleteSubscriber {
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
