import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: `https://ec2-50-16-156-98.compute-1.amazonaws.com/backend/graphql`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;
