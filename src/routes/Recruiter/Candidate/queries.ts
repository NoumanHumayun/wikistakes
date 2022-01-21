import { gql } from "@apollo/client/core";

export const FETCH_JOB_CANDIDATE = gql`
  query job($jobId: ID!, $candidateId: String!) {
    job(id: $jobId) {
      jobTitle
    }
    candidate(id: $candidateId) {
      firstName
      lastName
    }
  }
`;

export const GET_CANDIDATES_BY_JOB = gql`
  query candidatesByJob($jobId: ID!, $limit: Int, $offset: Int) {
    candidatesByJob(jobId: $jobId, limit: $limit, offset: $offset) {
      id
      records
      firstName
      lastName
      education
      candidateStatus(jobId: $jobId) {
        status
      }
      applications(jobId: $jobId) {
        jobId
        appliedOn
        job {
          jobTitle
          jobTags {
            tag
          }
          company {
            logo
            about
            name
            recruiter {
              firstName
              lastName
            }
          }
        }
      }
    }
  }
`;

export const FETCH_JOB_COMPANY = gql`
  query job($id: ID!) {
    job(id: $id) {
      jobTitle
      company {
        id
        name
        logo
        about
        recruiter {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const GET_CANDIDATE_BY_ID = gql`
  query candidate($id: String!, $jobId: ID!) {
    candidate(id: $id) {
      firstName
      lastName
      location
      avatar
      education
      applied
      candidateTags {
        tag
      }
      candidateStatus(jobId: $jobId) {
        status
      }
      resume(jobId: $jobId) {
        permission
        resume
      }
    }
  }
`;
