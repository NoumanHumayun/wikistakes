import { gql } from "@apollo/client/core";

export const ADD_SWEEP = gql`
  mutation addSweep($input: SweepInput) {
    addSweep(input: $input) {
      id
      title
      influencer {
        social1
        email
      }
    }
  }
`;

export const ADD_SWEEP_FILES = gql`
  mutation addSweepFiles($id: String!, $files: [Upload]) {
    addSweepFiles(id: $id, files: $files) {
      id
      title
      influencer {
        social1
        email
      }
    }
  }
`;
