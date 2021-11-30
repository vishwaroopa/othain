import gql from "graphql-tag";

const HOMEPAGE_QUERY = gql`
query Global{
  post(id: 5545, idType: DATABASE_ID) {
    id
    databaseId
    title
    uri
    slug
content
}
}`;
export default HOMEPAGE_QUERY;
