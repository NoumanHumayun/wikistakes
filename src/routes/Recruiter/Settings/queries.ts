import { gql } from "@apollo/client/core";


export const FETCH_RECRUITER_PROFILE = gql`
  query recruiter($id: String!) {
    recruiter(id: $id) {
      id
      firstName
      lastName
      avatar
      phone
      location
      login{
        email
      }
    }
  }
`;

