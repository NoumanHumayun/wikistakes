import { gql } from "@apollo/client/core";

export const JOB_STATUSES_CREATE = gql`
mutation jobStatusCreate($input: JobStatusCreate!) {
  jobStatusCreate(input: $input) {
    id
    status
    jobId
  }
}
`;