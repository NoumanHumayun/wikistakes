import { gql } from "@apollo/client/core";

export const GET_CANDIDATES = gql`
  query candidates(
    $limit: Int
    $offset: Int
    $filters: CandidateFilters
    $orderBy: SortCandidates
  ) {
    candidates(
      limit: $limit
      offset: $offset
      filters: $filters
      orderBy: $orderBy
    ) {
      id
      records
      firstName
      lastName
      avatar

      email
      phone
      location
      education
      applied

      candidateStatus{
      status
    }
      resume {
        candidateId
        title
        resumeText
        resume
        uploadedDate
        permission
      }
      login {
        lastLogin
      }
      candidateTags {
        id
        candidateId
        jobId
        tag
      }
      socialLinks{
      title
      link
    }
      candidateNotes {
        jobId
        candidateId
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

export const DISTINCT_LOCATION = gql`
  query Locations {
    Locations
  }
`;

export const GET_DISTINCT_CANDIDATE_TAGS = gql`
  query candidateDistinctTags {
    candidateDistinctTags
  }
`;
export const GET_DISTINCT_DATE = gql`
  query candidateDistinctDate {
    candidateDistinctDate
  }
`;
export const GET_DISTINCT_STATUS = gql`
  query candidateDistinctStatus {
    candidateDistinctStatus
  }
`;
