import {
  concat,
  HttpLink,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
// const uri = "https://apis.resumaps.com/graphql";
const uri = "http://localhost:2000/graphql";

const httpLink = new HttpLink({ uri });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization:
        sessionStorage.getItem("token") || localStorage.getItem("token")
          ? `Bearer ${
              sessionStorage.getItem("token") || localStorage.getItem("token")
            }`
          : null,
    },
  });

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach((error) => {
      if (error.message === "jwt expired" || error.message === "invalid signature") {
        localStorage.clear();
        window.location.href = "/signin";
      }
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: from([errorLink, concat(authMiddleware, httpLink)]),

  cache: new InMemoryCache(),
});

export default client;
