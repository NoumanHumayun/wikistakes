import { gql } from "@apollo/client/core";

export const GET_CANDIDATE_APPLICATION = gql`
  query candidate($id: String!, $jobId: ID!) {
    candidate(id: $id) {
      id
      firstName
      lastName
      avatar
      education
      tags: candidateTags {
        id
        tag
      }

      applications(jobId: $jobId) {
        id
        job {
          company {
            logo
            name
          }
          recruiter {
            firstName
            lastName
            logo: avatar
          }
        }
        status {
          status
        }
        resume {
          id
          title
          resume
          permission
        }
        autoDelete
      }
    }
  }
`;

export const GET_RESUME_BY_CONTEXT = gql`
  query resumesByContext {
    resumesByContext {
      id
      candidateId
      resumeText
      title
      resume
      permission
    }
  }
`;
