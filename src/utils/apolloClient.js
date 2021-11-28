import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: `http://ec2-18-233-0-142.compute-1.amazonaws.com/graphql`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;
