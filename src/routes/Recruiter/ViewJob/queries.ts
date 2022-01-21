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
        logo
        name
        about
      }
      recruiter {
        firstName
        lastName
        avatar
        phone
        location
        phoneCode
      }
      statuses: jobStatuses {
        status
      }
      jobTags {
        tag
      }
    }
  }
`;


