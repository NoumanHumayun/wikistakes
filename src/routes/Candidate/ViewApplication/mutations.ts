import { gql } from "@apollo/client/core";

export const JOB_CANDIDATES_UPDATE = gql`
  mutation jobCandidateUpdate($input: JobCandidatesUpdate!) {
    jobCandidateUpdate(input: $input) {
      id
      resumeId
    }
  }
`;
export const RESUME_UPDATE = gql`
  mutation resumeUpdate($input: ResumeUpdate!) {
    resumeUpdate(input: $input) {
      id
      candidateId
    }
  }
`;

export const APPLICATION_DELETE = gql`
  mutation jobCandidateDelete($id: String!) {
    jobCandidateDelete(id: $id) {
      id
    }
  }
`;
