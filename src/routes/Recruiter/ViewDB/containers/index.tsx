import React from "react";
import { useContext } from "react";
import { Row, Column, CustomColumn, Container } from "components/structural";
import {
  SelectInput,
  ResumeText,
  CustomRow,
  OpenStatus,
  ClosedStatus,
  ApplicantsButton,
  ButtonText,
} from "../components/styled.component";
import { useParams } from "react-router-dom";
import { ApplicantView, UserCard, CandidateCard } from "../components";
import { ThemeContext } from "styled-components";

import { ReactComponent as DownloadIcon } from "assets/svg/downloadButton.svg";
import { ReactComponent as DropDownArrow } from "assets/svg/arrow_down.svg";
import { GET_CANDIDATES_RESUME } from "../queries";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import GenericLoader from "components/GenericLoader";
import { useRef } from "react";
import { useEffect } from "react";

const { Option } = SelectInput;

const DbContainer = (props: any) => {
  const embedRef = useRef<HTMLEmbedElement>(null);
  const { id } = useParams<any>();
  const [filter, setFilter] = React.useState("open");
  const { isDesktop } = useContext(ThemeContext);

  const { data, error, loading, refetch } = useQuery<any>(
    GET_CANDIDATES_RESUME,
    {
      variables: { id },
      fetchPolicy: "no-cache",
    }
  );

  useEffect(() => {
    if(embedRef && embedRef.current){
      embedRef?.current?.addEventListener("contextmenu", () => false);
    }
  }, [embedRef]);

  const handleChange = React.useCallback((val: any) => {
    setFilter(val);
  }, []);

  const {
    jobTitle,
    name,
    logo,
    firstName,
    lastName,
    avatar,
    candidateTags,
    education,
    about,
    permission,
    resume,
  }: any = React.useMemo(() => {
    if (!loading && data?.resume) {
      const { job, candidate, ...rest } = data.resume;
      const {
        jobTitle,
        company: { name, logo, about },
      } = job ?? { company: {} };
      const {
        firstName,
        lastName,
        avatar,
        candidateTags,
        education,
      } = candidate;
      return {
        jobTitle,
        name,
        logo,
        firstName,
        lastName,
        avatar,
        candidateTags,
        education,
        about,
        ...rest,
      };
    }
    return {};
  }, [data, loading]);

  if (loading) return <GenericLoader invert />;
  return (
    <Container>
      <Row>
        <ApplicantView name={name} logo={logo} jobTitle={jobTitle} />
        <Row margin={isDesktop ? "18px 0px 8px 0px" : "10px 16px 8px 16px"}>
          <ApplicantsButton disabled={permission === "VIEW"}>
            <ButtonText>Download Resume</ButtonText> <DownloadIcon />
          </ApplicantsButton>
          <SelectInput
            onChange={handleChange}
            placeholder="Status"
            suffixIcon={<DropDownArrow />}
            value={filter}
          >
            <Option value="open">
              <OpenStatus /> Open
            </Option>
            <Option value="applied">
              <ClosedStatus /> Applied
            </Option>
          </SelectInput>
        </Row>
      </Row>
      {isDesktop && (
        <CustomRow alignItems="center" justifyContent="flex-start">
          <UserCard
            firstName={firstName}
            lastName={lastName}
            logo={logo}
            type="Recruiter"
          />
          <UserCard name={name} logo={logo} type="Company" />
          <ResumeText>
            <strong>Resume is available as view and download.</strong>
          </ResumeText>
        </CustomRow>
      )}

      <CandidateCard
        firstName={firstName}
        lastName={lastName}
        avatar={avatar}
        education={education}
        about={about}
        jobTitle={jobTitle}
        tags={candidateTags}
        type="Candidate"
        resume={resume}
      />
    </Container>
  );
};

export default DbContainer;
