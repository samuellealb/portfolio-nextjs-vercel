import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `${process.env.CONTENTFUL_GRAPHQL_URL}/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});
