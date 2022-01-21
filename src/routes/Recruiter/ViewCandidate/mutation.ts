import { gql } from "@apollo/client/core";

export const CANDIDATE_TAG_CREATE = gql`
  mutation candidateTagCreate($input: CandidateTagCreate!) {
    candidateTagCreate(input: $input) {
      id
      jobId
      candidateId
      tag
    }
  }
`;

export const CANDIDATE_TAG_DELETE = gql`
  mutation candidateTagDelete($id: ID!) {
    candidateTagDelete(id: $id) {
      id
    }
  }
`;

export const CANDIDATE_NOTE_DELETE = gql`
  mutation candidateNoteDelete($id: ID!) {
    candidateNoteDelete(id: $id) {
      id
    }
  }
`;

export const CANDIDATE_NOTE_CREATE = gql`
  mutation candidateNoteCreate($input: CandidateNotesCreate!) {
    candidateNoteCreate(input: $input) {
      id
    }
  }
`;

export const CANDIDATE_NOTE_UPDATE = gql`
  mutation candidateNoteUpdate($input: CandidateNotesUpdate!) {
    candidateNoteUpdate(input: $input) {
      id
    }
  }
`;
