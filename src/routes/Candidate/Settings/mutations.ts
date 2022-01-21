import { gql } from "@apollo/client/core";

export const CANDIDATES_PROFILE_CREATE = gql`
  mutation candidatesCreate($input: CandidatesCreate!) {
    candidatesCreate(input: $input) {
      id
    }
  }
`;

export const CANDIDATES_PROFILE_UPDATE = gql`
  mutation candidatesUpdate($input: CandidatesUpdate!) {
    candidatesUpdate(input: $input) {
      id
    }
  }
`;

export const SOCIAL_LINKS_CREATE = gql`
  mutation socialLinkCreate($input: SocialLinksCreate!) {
    socialLinkCreate(input: $input) {
      id
    }
  }
`;

export const SOCIAL_LINKS_UPDATE = gql`
  mutation socialLinkUpdate($input: SocialLinksUpdate!) {
    socialLinkUpdate(input: $input) {
      id
      candidateId
    }
  }
`;

export const SOCIAL_LINK_DELETE = gql`
  mutation socialLinkDelete($id: ID!) {
    socialLinkDelete(id: $id){
      id
    }
  }
`;

export const NOTIFICATIONS_SETTINGS_CREATE = gql`
  mutation notificationSettingCreate($input: NotificationSettingCreate!) {
    notificationSettingCreate(input: $input) {
      id
      candidateId
    }
  }
`;

export const NOTIFICATIONS_SETTINGS_UPDATE = gql`
  mutation notificationSettingUpdate($input: NotificationSettingUpdate!) {
    notificationSettingUpdate(input: $input) {
      id
    }
  }
`;

export const PASSWPORD_CHANGE = gql`
  mutation passwordChange($oldPassword: String!, $newPassword: String!) {
    passwordChange(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`;

export const CANDIDATE_DELETE = gql`
  mutation candidatesDelete($id: String!) {
    candidatesDelete(id: $id) {
      id
    }
  }
`;

export const CANDIDATE_ACCOUNT_DELETE = gql`
  mutation candidatesAccountDelete($id: String!) {
    candidatesAccountDelete(id: $id) {
      id
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

export const RESUME_AUTO_DELETE = gql`
  mutation resumeAutoDelete(
    $jobId: String!
    $candidateId: String!
    $resumeId: String!
  ) {
    resumeAutoDelete(
      jobId: $jobId
      candidateId: $candidateId
      resumeId: $resumeId
    ) {
      id
    }
  }
`;

export const RESUME_UPLOAD = gql`
  mutation resumeCreate($input: ResumeCreate!) {
    resumeCreate(input: $input) {
      id
    }
  }
`;

export const RESUME_DELETE = gql`
  mutation resumeDelete($id: String!) {
    resumeDelete(id: $id) {
      id
    }
  }
`;

export const DELETE_DATA = gql`
  mutation candidateDataDelete {
    candidateDataDelete
  }
`;
