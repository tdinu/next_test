import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'https://countries.trevorblades.com',
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

export default client;
