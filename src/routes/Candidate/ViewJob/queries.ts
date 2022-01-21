import { gql } from "@apollo/client/core";

export const GET_JOB = gql`
  query job($id: ID!) {
    job(id: $id) {
      id
      recruiterId
      companyId
      jobTitle
      location
      industry
      jobDescription
      qualification
      requirements
      postDate
      applied
      company {
        id
        logo
        name
        about
      }

      jobTags {
        tag
      }
    }
  }
`;

export const GET_CANDIDATE_STATUS = gql`
  query candidate($id: String!, $jobId: ID!) {
    candidate(id: $id) {
      applications(jobId: $jobId) {
        status {
          status
        }
      }
    }
  }
`;
