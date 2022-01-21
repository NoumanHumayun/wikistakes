import { gql } from "@apollo/client/core";

export const CANDIDATE_STATUSES_CREATE = gql`
mutation candidateStatusCreate($input: CandidateStatusCreate!) {
  candidateStatusCreate(input: $input) {
    id
    candidateId
    status
    jobId
  }
}
`;