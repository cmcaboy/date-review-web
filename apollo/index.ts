// import { ApolloClient } from 'apollo-client';
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { setContext } from "apollo-link-context";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { ApolloLink, split } from "apollo-link";
import { persistCache } from "apollo-cache-persist";
import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";
import gql from "graphql-tag";
import { resolvers, defaults } from "./localState";

// * This file is the setup file for Apollo client

// Initiate the cache
const cache = new InMemoryCache({ dataIdFromObject: object => object.id });

// persistCache allows apollo to store the cache or local state to AsyncStorage
// This works similar to redux-persist.
persistCache({
  cache,
  storage: localStorage as PersistentStorage<
    PersistedData<NormalizedCacheObject>
  >
});

// stateLink is the local graphql engine for state management
const stateLink = withClientState({
  cache,
  defaults,
  resolvers
  // typeDefs
});

// We put both the state link and http link in httpLink to let the application
// query the application state when applicable
const httpLink = ApolloLink.from([
  stateLink,
  new HttpLink({
    uri: `${process.env.GRAPHQL_SERVER}/graphql`
  })
]);

// Websockets are used for subscriptions.
const wsLink = new WebSocketLink({
  uri: `${process.env.GRAPHQL_SERVER_WS}/subscriptions`,
  options: {
    reconnect: true
  }
});

// The split function operates like a fi statement. If returned true, it hooks up to
// the web sockets link. If false, it uses the http link.
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const authLink = setContext(async (_, { headers }) => ({
  headers: {
    ...headers,
    authorization: localStorage.getItem("BoinkToken")
  }
}));

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export const client: any = {
  cache,
  typeDefs,
  link: authLink.concat(link),
  connectToDevTools: true
  // initializers: {
  //   isLoggedIn: async () => !!(await AsyncStorage.getItem('TaggToken')),
  // },
};

// enable remote debugging
// window.__APOLLO_CLIENT__ = client;
