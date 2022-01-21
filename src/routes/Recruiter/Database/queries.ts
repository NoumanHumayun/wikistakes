import { gql } from "@apollo/client/core";

export const GET_CANDIDATES_TABLE = gql`
  query resumes($limit: Int, $offset: Int, $filters: ResumeFilters) {
    resumes(limit: $limit, offset: $offset, filters: $filters) {
      id
      records
      title
      permission
      uploadedDate
      resume
      login {
        status
      }
      job {
        id
        jobTitle
        company {
          id
          logo
          name
        }
      }
      candidate {
        id
        location
        firstName
        lastName
        avatar
      }
    }
  }
`;

export const GET_DISTINCT_LOCATION = gql`
  query candidateLocations {
    candidateLocations
  }
`;

export const GET_RESUME_DISTINCT_DATE = gql`
  query resumeDistinctDate {
    resumeDistinctDate
  }
`;
