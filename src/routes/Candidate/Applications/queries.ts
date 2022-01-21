import { gql } from "@apollo/client/core";


export const GET_JOB_CANDIDATES = gql`
 query applicationsByContext 
 (
  $limit: Int
  $offset: Int
  $filters: JobCandidateFilters
){
  applicationsByContext(    limit: $limit
    offset: $offset
    filters: $filters) {
    candidateId
    statuses: status {
      status
    }
    candidate{
      id
      firstName
      lastName
      avatar
      applied
    }
    
    jobId
    id
    records
    appliedOn
    jobId
    job {
      id
      applied
      jobTitle
      location
      company {
        name
        logo
      }
    }
  }
}
`;

export const GET_DISTINCT_APPLIED_JOBDATES = gql`
  query appliedOnByContext {
    appliedOnByContext
  }
`;