import { gql } from "@apollo/client/core";

export const JOB_CREATE = gql`
  mutation jobCreate($input: JobCreate!) {
    jobCreate(input: $input) {
      id
    }
  }
`;

export const JOB_UPDATE = gql`
  mutation jobUpdate($input: JobUpdate!) {
    jobUpdate(input: $input) {
      id
    }
  }
`;
