import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { bootstrap as bootstrapGlobalAgent } from 'global-agent';

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL;

bootstrapGlobalAgent();

const client = new ApolloClient({
   link: new HttpLink({
      uri: graphQLAPI,
   }),
   cache: new InMemoryCache()   
});

export default client;