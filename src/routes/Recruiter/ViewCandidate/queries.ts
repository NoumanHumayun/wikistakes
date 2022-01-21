import { gql } from "@apollo/client/core";

export const GET_CANDIDATE = gql`
  query candidate($id: String!, $jobId: ID!) {
    candidate(id: $id) {
      id
      firstName
      lastName
      avatar
      email
      phone
      location
      applied
      
      links: socialLinks {
        title
        link
      }

      tags: candidateTags(jobId: $jobId) {
        id
        tag
      }

      notes: candidateNotes(jobId: $jobId) {
        id
        notes
      }

      applications {
        appliedOn
        job {
          id
          jobTitle
          location

          company {
            logo
            name
          }
        }
      }
    }
  }
`;

export const GET_CANDIDATE_BY_ID = gql`
  query candidate($id: String!) {
    candidate(id: $id) {
      id
      firstName
      lastName
      avatar
      email
      phone
      location
      applied
      
      links: socialLinks {
        title
        link
      }

      tags: candidateTags {
        id
        tag
      }

      notes: candidateNotes{
        id
        notes
      }

      applications {
        appliedOn
        job {
          id
          jobTitle
          location

          company {
            logo
            name
          }
        }
      }
    }
  }
`;
