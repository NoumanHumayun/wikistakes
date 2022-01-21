import { gql } from "@apollo/client/core";

export const INVITE_CANDIDATES = gql`
  mutation inviteCandidates($jobId: ID!, $candidateIds: [ID]!) {
    inviteCandidates(jobId: $jobId, candidateIds: $candidateIds)
  }
`;
