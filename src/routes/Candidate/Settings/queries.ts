import { gql } from "@apollo/client/core";

export const FETCH_CANDIDATE_PROFILE = gql`
  query candidate($id: String!) {
    candidate(id: $id) {
      id
      firstName
      lastName
      avatar
      email
      phone
      location
      education
      socialLinks {
        id
        title
        link
      }
      resume {
        id
        title
        resume
        permission
      }
      applications {
        id
        job {
          id
        }
      }
    }
  }
`;

export const SOCIAL_LINK = gql`
  query socialLink($id: ID!) {
    socialLink(id: $id) {
      id
      candidateId
      title
      link
    }
  }
`;

export const NOTIFICATIONS_SETTINGS = gql`
  query notificationSettingsByCandidateId($candidateId: ID!) {
    notificationSettingsByCandidateId(candidateId: $candidateId) {
      id
      candidateId
      email
      status
      opportunities
      resume
      createdOn
    }
  }
`;

export const GET_RESUME_BY_CONTEXT = gql`
  query resumesByContext {
    resumesByContext {
      id
      candidateId
      resumeText
      title
      resume
      permission
    }
  }
`;

export const GET_CANDIDATE = gql`
  query candidate($id: String!) {
    candidate(id: $id) {
      id
      resume {
        id
        title
        resume
        permission
      }
    }
  }
`;

export const FETCH_CANDIDATE_DATA = gql`
  query candidate($id: String!) {
    candidate(id: $id) {
      resume {
        id
        title
        createdOn
        resume
        resumeText
      }
      applications {
        applicationId: id
        candidateId
        createdOn
        job {
          jobTitle
        }
        autoDelete
        resume {
          id
          title
          permission
        }
      }
    }
  }
`;
