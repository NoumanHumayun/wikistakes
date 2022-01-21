import { gql } from "@apollo/client/core";


export const GET_CANDIDATES_RESUME = gql`
  query resume($id: ID!) {
    resume(id: $id) {
      id
      records
      title
      uploadedDate
      permission,
      resume
      job{
      jobTitle
      company{
        name
        about
        logo
        recruiter{
          firstName
        }
      }
    }
      candidate {
        id
        location
        firstName
        lastName
        avatar
        education
        candidateTags{
        tag
      }
        statuses: login {
          status
        }
      }
    }
  }
`;



