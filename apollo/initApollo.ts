// import { ApolloClient } from 'apollo-client';
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { setContext } from "apollo-link-context";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";
import { ApolloLink, split } from "apollo-link";
// import { persistCache } from "apollo-cache-persist";
// import { PersistentStorage, PersistedData } from "apollo-cache-persist/types";
import fetch from "isomorphic-unfetch";
import { resolvers, defaults, typeDefs } from "./localState";
import { isBrowser } from "./isBrowser";
import { ApolloClient } from "apollo-client";
import { getMainDefinition } from "apollo-utilities";

// * This file is the setup file for Apollo client

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  (global as any).fetch = fetch;
}

interface Options {
  getToken: () => string;
  graphqlServer?: string;
}

function create(initialState: any, { getToken, graphqlServer }: Options) {
  // Initiate the cache
  // const cache = new InMemoryCache({ dataIdFromObject: object => object.id });
  const cache = new InMemoryCache().restore(initialState || {});

  // console.log("GRAPHQL_SERVER", process.env.GRAPHQL_SERVER);

  // persistCache allows apollo to store the cache or local state to AsyncStorage
  // This works similar to redux-persist.
  // TODO: setup persistCache - localStorage not found
  // persistCache({
  //   cache,
  //   storage: localStorage as PersistentStorage<
  //     PersistedData<NormalizedCacheObject>
  //   >
  // });

  // stateLink is the local graphql engine for state management
  const stateLink = withClientState({
    cache,
    defaults,
    resolvers,
    typeDefs
  });

  const httpLink = new HttpLink({
    uri: graphqlServer
    // uri: `http://localhost:4000/graphql`,
    // credentials: "include" // * from ben awad
    // fetchOptions: {
    //   mode: "no-cors"
    // }
  });

  // We put both the state link and http link in httpLink to let the application
  // query the application state when applicable
  const combinedLink = ApolloLink.from([stateLink, httpLink]);

  // TODO: Setup subscriptions with web sockets
  // Websockets are used for subscriptions.
  // const wsLink = new WebSocketLink({
  //   uri: `${process.env.GRAPHQL_SERVER_WS}/subscriptions`,
  //   options: {
  //     reconnect: true
  //   }
  // });

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
    // wsLink,
    combinedLink,
    combinedLink
  );
  // const link = httpLink;

  const authLink = setContext((_, __) => {
    const token = getToken();
    // console.log("token: ", token);
    return {
      headers: {
        // ...headers,
        cookie: token ? `qid=${token}` : ""
      }
    };
  });

  return new ApolloClient({
    cache,
    link: authLink.concat(link),
    connectToDevTools: true,
    ssrMode: !isBrowser // Disables forceFetch on the server (so queries are only run once)
    // initializers: {
    //   isLoggedIn: async () => !!(await AsyncStorage.getItem('TaggToken')),
    // },
  });

  // enable remote debugging
  // window.__APOLLO_CLIENT__ = client;
}

export default function initApollo(initialState: any, options: Options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
