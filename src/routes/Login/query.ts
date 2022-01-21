import { gql } from "@apollo/client/core";

export const LOGIN = gql`
  query login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
      status
      lastLogin
      token
      roles {
        id
        name
      }
      recruiter {
        firstName
        lastName
      }
      candidate {
        firstName
        lastName
      }
    }
  }
`;
