import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
query Global{
  post(id: 4828, idType: DATABASE_ID) {
    id
    databaseId
    title
    uri
    slug
content
}
}

`;

export default CATEGORIES_QUERY;
