/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { startCase, toLower } from "lodash";
import { ThemeContext } from "styled-components";
import { Row, Container } from "components/structural";
import { useParams } from "react-router-dom";

import PrimaryButton from "components/button/primary";
import SecondaryButton, { SecondaryLink } from "components/button/secondary";
import UserCard from "components/General/UserCard";

import { SelectInput } from "components/SelectInput";
import { Status, ButtonText } from "components/typography";
import { BackLink } from "../components/styled.component";
import ManageApplication from "./ManageApplication";
import { ReactComponent as DropDownArrow } from "assets/svg/arrow_down.svg";
import { ReactComponent as SettingsIcon } from "assets/svg/settings.svg";
import { ReactComponent as ResumeIcon } from "assets/svg/resume.svg";
import { ReactComponent as BackIcon } from "assets/svg/back.svg";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { CandidateCard } from "../components";

import { GET_CANDIDATE_APPLICATION } from "../queries";
import GenericLoader from "components/GenericLoader";

import { RESUME_UPDATE } from "../mutations";

import permissions from "mock/permissions.json";

const VContainer = () => {
  const { isDesktop } = useContext(ThemeContext);
  const [resumeUpdate] = useMutation(RESUME_UPDATE);
  const { jobId, candidateId } = useParams<any>();
  const [manageModal, setManageModal] = React.useState(false);

  const { data, loading, refetch } = useQuery<any>(GET_CANDIDATE_APPLICATION, {
    variables: { jobId, id: candidateId },
    fetchPolicy: "no-cache",
  });

  const {
    applicationId,
    name,
    logo,
    status,
    resume,
    autoDelete,
    recruiter,
    ...candidate
  }: any = React.useMemo(() => {
    if (!loading && data?.candidate) {
      const { applications, ...rest } = data.candidate;

      const [
        {
          id: applicationId,
          job: {
            company: { logo, name },
            recruiter,
          },
          status: { status },

          resume,
          autoDelete,
        },
      ] = applications;
      return { ...rest, status, logo, name, resume, autoDelete, applicationId, recruiter };
    }

    return {};
  }, [data, loading]);

  const handleChange = React.useCallback(
    async (permission: any) => {
      try {
        await resumeUpdate({
          variables: {
            input: {
              id: resume?.id,
              permission,
              candidateId,
            },
          },
        });
      } catch (error) {
        console.error(error);
      }
      refetch();
    },
    [resume, candidateId, resumeUpdate, refetch]
  );

  if (loading) return <GenericLoader invert />;
  return (
    <>
      <Container>
        <Row
          justifyContent="flex-end"
          gap="8px"
          margin={isDesktop ? "32px 0px 0px 0px" : "16px"}
        >
          <BackLink
            to="/candidate/applications"
            style={{ justifySelf: "flex-start" }}
          >
            <BackIcon />
            {isDesktop ? "Back to Applications" : ""}
          </BackLink>

          <SecondaryButton>
            <SettingsIcon onClick={() => setManageModal(true)} />
          </SecondaryButton>

          <SecondaryLink target="_new" to={`//apis.resumaps.com/file/${resume?.resume}`}>
            {isDesktop && <ButtonText>My Resume</ButtonText>}
            <ResumeIcon />
          </SecondaryLink>

          <PrimaryButton>
            <Status>{toLower(startCase(status))}</Status>
          </PrimaryButton>
        </Row>
        <Row
          margin={isDesktop ? "45px 0px 0px 0px" : "45px 16px 0px 16px"}
          justifyContent="flex-start"
          gap="16px"
          rowGap="20px"
        >
          <UserCard {...recruiter} type="Recruiter" />

          <UserCard name={name} logo={logo} type="Company" />

          <SelectInput
            onChange={handleChange}
            placeholder="Download"
            suffixIcon={<DropDownArrow />}
            options={permissions}
            value={resume?.permission}
            style={
              isDesktop
                ? { marginLeft: "auto" }
                : { flex: 1, marginLeft: "0px" }
            }
          />
        </Row>

        <embed
          style={{ marginTop: '20px' }}
          src={`//apis.resumaps.com/file/${resume?.resume}`}
          height="100%"
          width="100%"
        />
        
      </Container>
      {manageModal && (
        <ManageApplication
          {...resume}
          applicationId={applicationId}
          candidateId={candidateId}
          autoDelete={autoDelete}
          handleCloseModal={() => {
            setManageModal(false);
            refetch();
          }}
        />
      )}
    </>
  );
};

export default VContainer;
