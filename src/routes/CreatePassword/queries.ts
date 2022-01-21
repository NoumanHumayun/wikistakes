import { gql } from "@apollo/client/core";

export const PASSWORD_CREATE_TOKEN_VERIFICATION = gql`
  query verifyToken($token: String!) {
    verifyToken(token: $token)
  }
`;
