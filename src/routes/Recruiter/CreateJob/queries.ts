import { gql } from "@apollo/client/core";

export const COMPANIES_BY_CONTEXT_QUERY = gql`
  query companies {
    companies: companiesByContext {
      id
      name
      logo
    }
  }
`;

export const FETCH_JOB = gql`
  query job($id: ID!) {
    job(id: $id) {
      id
      company {
        id
        name
        logo
        about
      }
      jobTitle
      location
      industry
      jobDescription
      qualification
      requirements
      jobTags {
        id
        tag
      }
    }
  }
`;
