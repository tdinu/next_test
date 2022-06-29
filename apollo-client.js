import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'https://countries.trevorblades.com',
  // https://fruits-api.netlify.app/graphql
  // uri: 'https://api.spacex.land/graphql/',
  uri: 'https://fruits-api.netlify.app/graphql',
  cache: new InMemoryCache(),
});

export default client;
