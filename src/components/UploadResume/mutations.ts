import { gql } from "@apollo/client/core";

export const RESUME_CREATE = gql`
  mutation resumeCreate($input: ResumeCreate!) {
    resumeCreate(input: $input) {
      id
    }
  }
`;

export const APPLICATION_CREATE = gql`
  mutation jobCandidateCreate($input: JobCandidatesCreate!) {
    jobCandidateCreate(input: $input) {
      id
    }
  }
`;
