import { gql } from "@apollo/client/core";

export const FETCH_CANDIDATES = gql`
  query candidates($limit: Int!, $offset: Int!, $firstName: String!) {
    candidates(
      limit: $limit
      offset: $offset
      filters: { firstName: $firstName }
    ) {
      id
      firstName
      lastName
      avatar
      location
    }
  }
`;
