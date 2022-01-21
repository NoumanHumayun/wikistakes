import { useCallback, useMemo, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "styled-components";

import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { useMutation } from "@apollo/client/react/hooks/useMutation";

import { SelectInput } from "components/SelectInput";
import { ContentHeading } from "components/typography";
import { Container, Row } from "components/structural";

import CompanyWithLogo from "components/General/CompanyWithLogo";
import UserCard from "components/General/UserCard";

import { HeaderButton } from "components/button/primary";
import { ReactComponent as View } from "assets/svg/view.svg";
import { ReactComponent as Donwload } from "assets/svg/downloadButton.svg";
import { ReactComponent as DropDownArrow } from "assets/svg/arrow_down.svg";

import { CandidateCard } from "../components";

import { CANDIDATE_STATUSES_CREATE } from "../mutation";
import { GET_CANDIDATE_BY_ID, FETCH_JOB_COMPANY } from "../queries";
import GenericLoader from "components/GenericLoader";

const CandidateContainer = () => {
  const { isDesktop } = useContext(ThemeContext);
  const { id, candidateId } = useParams<any>();

  const [candidateStatusCreate] = useMutation(CANDIDATE_STATUSES_CREATE);

  const { data, loading, refetch } = useQuery<any>(GET_CANDIDATE_BY_ID, {
    variables: { jobId: id, id: candidateId, limit: 10, offset: 0 },
    fetchPolicy: "no-cache",
  });

  const { data: companyData, loading: companyLoading } = useQuery(
    FETCH_JOB_COMPANY,
    {
      variables: { id },
      fetchPolicy: "cache-first",
    }
  );

  const onCandidateStatus = useCallback(
    async (val: any) => {
      await candidateStatusCreate({
        variables: { input: { candidateId, jobId: id, status: val } },
      });
      refetch();
    },
    [candidateStatusCreate, refetch, candidateId, id]
  );

  const { jobTitle, name, logo, about } = useMemo(() => {
    if (!companyLoading && companyData?.job) {
      const { jobTitle, company } = companyData.job;
      return { jobTitle, ...company };
    }
    return {};
  }, [companyData, companyLoading]);

  const {
    firstName,
    lastName,
    avatar,
    education,
    candidateTags = [],
    candidateStatus = [],
    permission,
    resume
  } = useMemo(() => {
    if (!loading && data?.candidate) {
      const { resume: resumeEntity, ...rest } = data.candidate ?? {};
      const { permission = undefined, resume = undefined } = resumeEntity?.length ? resumeEntity[0] ?? {} : {};

      return {
        ...rest,
        resume,
        permission,
      };
    }
    return {};
  }, [data, loading]);

  const candidateStatuses = useMemo(
    () => [
      { label: "Applied", value: "APPLIED" },
      { label: "Shortlisted", value: "SHORTLISTED" },
      { label: "Phone Screen", value: "PHONE_SCREEN" },
      { label: "Client Interview", value: "CLIENT_INTERVIEW" },
      { label: "Review", value: "REVIEW" },
    ],
    []
  );

  if (loading || companyLoading) return <GenericLoader invert />;

  return (
    <>
      <Container>
        <Row margin={isDesktop ? "0px" : "20px 16px"}>
          <CompanyWithLogo name={name} logo={logo} jobTitle={jobTitle} />
          {isDesktop && (
            <SelectInput
              onChange={onCandidateStatus}
              placeholder="Status"
              suffixIcon={<DropDownArrow />}
              options={candidateStatuses}
              value={candidateStatus[0]?.status}
            />
          )}
        </Row>

        <Row margin={isDesktop ? "18px 0px 8px 0px" : "18px 16px 8px 16px"}>
          {isDesktop ? (
            <>
              <UserCard
                firstName={firstName}
                lastName={lastName}
                logo={logo}
                type="Recruiter"
              />
              <UserCard name={name} logo={logo} type="Company" />
              <ContentHeading style={{ cursor: "pointer" }}>
                <Link target="_new" to={`//apis.resumaps.com/file/${resume}`}>
                  {permission === "VIEW" ? <View /> : <Donwload />}
                  Resume is available
                  {permission === "VIEW" ? " as view only" : " to download"}.
                </Link>
              </ContentHeading>
            </>
          ) : (
            <>
              <HeaderButton>
                {permission === "VIEW" ? <View /> : <Donwload />}
              </HeaderButton>

              <SelectInput
                onChange={onCandidateStatus}
                placeholder="Status"
                suffixIcon={<DropDownArrow />}
                options={candidateStatuses}
                value={candidateStatus[0]?.status}
              />
            </>
          )}
        </Row>
        <CandidateCard
          firstName={firstName}
          lastName={lastName}
          tags={candidateTags}
          avatar={avatar}
          education={education}
          about={about}
          type="Candidate"
          resume={resume}
        />
      </Container>
    </>
  );
};

export default CandidateContainer;
