import React from "react";

import toLower from "lodash/toLower";
import startCase from "lodash/startCase";

import { useParams } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { useQuery } from "@apollo/client/react/hooks/useQuery";

import GenericLoader from "components/GenericLoader";
import PrimaryButton from "components/button/primary";
import { SecondaryLink } from "components/button/secondary";

import { Status, ButtonText } from "components/typography";
import { Row, Container } from "components/structural";

import { BackLink } from "../components/styled.component";
import { ReactComponent as BackIcon } from "assets/svg/back.svg";
import { ReactComponent as ResumeIcon } from "assets/svg/resume.svg";

import JobView from "../../JobView";

import { GET_JOB, GET_CANDIDATE_STATUS } from "../queries";

const JvContainer = () => {
  const { isDesktop } = React.useContext(ThemeContext);

  const { id } = useParams<any>();
  const candidateId = localStorage.getItem("id") || "";

  const { data, loading } = useQuery<any>(GET_JOB, {
    variables: { id },
    fetchPolicy: "no-cache",
  });

  const { data: candidateData, loading: loadingCandidate } = useQuery(
    GET_CANDIDATE_STATUS,
    {
      variables: { id: candidateId, jobId: id },
      fetchPolicy: "no-cache",
    }
  );

  const status = React.useMemo(() => {
    if (!loadingCandidate && candidateData?.candidate) {
      const { applications } = candidateData.candidate;
      const [
        {
          status: { status },
        },
      ] = applications;
      return status;
    }

    return "";
  }, [candidateData, loadingCandidate]);

  if (loading || loadingCandidate) return <GenericLoader invert />;
  return (
    <Container>
      <Row
        justifyContent="flex-end"
        gap="8px"
        margin={isDesktop ? "32px 0px 12px 0px" : "16px"}
      >
        <BackLink
          to="/candidate/applications"
          style={{ justifySelf: "flex-start" }}
        >
          <BackIcon />
          {isDesktop ? "Back to Applications" : ""}
        </BackLink>

        <SecondaryLink to={`/candidate/applications/${id}/${candidateId}/view`}>
          {isDesktop && <ButtonText>My Application</ButtonText>}
          <ResumeIcon />
        </SecondaryLink>

        <PrimaryButton>
          <Status>{toLower(startCase(status))}</Status>
        </PrimaryButton>
      </Row>
      <JobView data={data?.job ?? {}} />
    </Container>
  );
};

export default JvContainer;
