import gql from "graphql-tag";

const HOME_QUERY = gql`
query Article{
 page(id:"/", idType: URI) {
    id
    databaseId
    title
    uri
    slug
content
}
}`;

export default HOME_QUERY;
