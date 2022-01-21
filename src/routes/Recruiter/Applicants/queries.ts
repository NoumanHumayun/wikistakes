import { gql } from "@apollo/client/core";

export const GET_CANDIDATES_BY_JOB = gql`
  query candidatesByJob($jobId: ID!, $limit: Int, $offset: Int) {
    candidatesByJob(jobId: $jobId, limit: $limit, offset: $offset) {
      id
      records
      firstName
      lastName
      location
      avatar
      applications(jobId: $jobId) {
        jobId
        createdOn
        statuses:status {
          status
        }
      }
      candidateTags {
        tag
      }

      login {
        status
      }
    }
  }
`;

export const FETCH_JOB_COMPANY = gql`
  query job($id: ID!) {
    job(id: $id) {
      jobTitle
      company {
        name
        logo
      }
    }
  }
`;
