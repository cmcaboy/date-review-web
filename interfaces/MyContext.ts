// import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import { NextContext } from "next";
import { ApolloClient } from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";

export interface MyContext extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  query: {
    id?: string;
  };
}
