import { gql } from "@apollo/client/core";

export const CREATE_RECRUITER = gql`
  mutation recruitersCreate($input: RecruitersCreate!) {
    recruiter: recruitersCreate(input: $input) {
      id
    }
  }
`;

export const CREATE_CANDIDATE = gql`
  mutation candidatesCreate($input: CandidatesCreate!) {
    candidatesCreate(input: $input) {
      id
    }
  }
`;
