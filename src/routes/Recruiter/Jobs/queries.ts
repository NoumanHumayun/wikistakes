import { gql } from "@apollo/client/core";

export const GET_JOBS = gql`
  query jobs($limit: Int, $offset: Int, $filters: JobFilters) {
    jobs(limit: $limit, offset: $offset, filters: $filters) {
      id
      records
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
        logo
        name
      }

      recruiter {
        firstName
        lastName
        avatar
        phone
        location
        phoneCode
      }
      statuses:jobStatuses {
        status
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
    jobPostDates
  }
`;
