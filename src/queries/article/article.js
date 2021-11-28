import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
query Article($slug: ID!){
  page(id: $slug, idType: URI) {
    id
    databaseId
    title
    uri
    slug
content
}
}`;

export default ARTICLE_QUERY;
