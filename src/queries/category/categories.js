import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
{
    menuItems(where: {parentId: "null", location: MAIN_NAV}) {
    nodes {
      id
      label
      parentId
      path
      title
      url
      childItems {
        nodes {
          id
          label
          title
          path
          url
          parentId
          description
          linkRelationship
          locations
          menuItemId
        }
      }
    }
  }
  }

`;

export default CATEGORIES_QUERY;
