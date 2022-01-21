import { gql } from "@apollo/client/core";

export const GET_PUBLIC_JOBS = gql`
  query jobsPublic($limit: Int, $offset: Int, $filters: JobFilters) {
    jobsPublic(limit: $limit, offset: $offset, filters: $filters) {
      id
      records
      recruiterId
      companyId
      jobTitle
      location
      industry
      jobDescription
      postDate

      company {
        logo
        name
      }
      jobTags {
        tag
      }
    }
  }
`;


export const GET_LOCATION = gql`
  query jobLocations {
    jobLocations
  }
`;

export const GET_INDUSTRIES = gql`
  query jobIndustries {
    jobIndustries
  }
`;
export const GET_POSTDATE = gql`
  query jobPostDates {
    jobPostDatesGeneric
  }
`;