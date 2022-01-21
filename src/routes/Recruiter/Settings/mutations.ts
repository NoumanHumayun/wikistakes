import { gql } from "@apollo/client/core";

export const RECRUITERS_PROFILE_CREATE = gql`
  mutation recruitersCreate($input: RecruitersCreate!) {
    recruitersCreate(input: $input) {
      id
    }
  }
`;

export const RECRUITERS_PROFILE_UPDATE = gql`
  mutation recruitersUpdate($input: RecruitersUpdate!) {
    recruitersUpdate(input: $input) {
      id  
        }
  }
`;

export const PASSWPORD_CHANGE = gql`
  mutation passwordChange($oldPassword: String!, $newPassword: String!) {
    passwordChange(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`;