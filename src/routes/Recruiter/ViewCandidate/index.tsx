import { useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react/hooks/useQuery";

import { H3 } from "components/typography";
import AppliedJobs from "./applied";
import {
  Row,
  Avatar,
  Drawer,
  CloseIcon,
  Tabs,
} from "components/structural";

import { GET_CANDIDATE, GET_CANDIDATE_BY_ID } from "./queries";
import GenericLoader from "components/GenericLoader";

import GeneralInfo from "./components/general";

const { TabPane } = Tabs;

interface ViewCandidateProps {
  resume?: string;
  isOpen: boolean;
  onClose: any;
  currentCandidate?: any;
  candidateId?: string;
}

const ViewCandidate = (props: ViewCandidateProps) => {
  const { isOpen, onClose, candidateId } = props;
  const { id } = useParams<any>();

  const { data, loading, refetch } = useQuery(id ? GET_CANDIDATE : GET_CANDIDATE_BY_ID, {
    fetchPolicy: "no-cache",
    variables: id ? {
      jobId: id,
      id: candidateId,
    } : { id: candidateId },
  });

  const { firstName, lastName, avatar, applied, applications, ...rest } = useMemo(() => {
    if (!loading && data?.candidate) return data.candidate;
    return {};
  }, [data, loading]);

  function callback(key: any) { }

  if (loading)
    return (
      <Drawer visible={true} width="100%" closable={false}>
        <GenericLoader invert />
      </Drawer>
    );

  return (
    <Drawer visible={true} width="100%" closable={false}>
      <Row justifyContent="flex-start" gap="16px" margin="24px 28px 24px 24px">
        <Avatar
          src={avatar ? `https://apis.resumaps.com/file/${avatar}/32/32` : null}
        />

        <H3>
          {firstName} {lastName}
        </H3>
        <CloseIcon onClick={onClose} />
      </Row>

      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="General Info" key="1">
          <GeneralInfo
            {...{ firstName, lastName, avatar, candidateId, jobId: id }}
            {...rest}
            refetch={refetch}
          />
        </TabPane>
        <TabPane tab={`Jobs Applied (${applied})`} key="2">
          <AppliedJobs applications={applications} />
        </TabPane>
      </Tabs>
    </Drawer>
  );
};

export default ViewCandidate;
