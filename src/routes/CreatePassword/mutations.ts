import { gql } from "@apollo/client/core";
export const PASSWPORD_CREATE = gql`
  mutation passwordCreate($id: ID!, $password: String!) {
    passwordCreate(id: $id, password: $password)
  }
`;
