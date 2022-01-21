import { useContext, useState, useMemo } from "react";

import { useParams } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { useQuery } from "@apollo/client/react/hooks/useQuery";

import GenericLoader from "components/GenericLoader";
import LandingNavbar from "components/LandingNavbar";
import { BurgerMenu } from "components/burgermenu";

import { BreadLink, HeaderButtonText } from "components/typography";
import {
  PageHeader,
  PageLabelAndBurger,
  Breadcrumb,
  NextArrowIcon,
} from "components/structural";

import { HeaderButton } from "components/button/primary";
import { ReactComponent as InviteCandidate } from "assets/svg/invite_candidate.svg";

import InviteCandidates from "routes/Recruiter/InviteCandidates";
import Container from "./containers";
import { FETCH_JOB_COMPANY } from "./queries";

const View = () => {
  const { id } = useParams<any>();
  const { isDesktop } = useContext(ThemeContext);

  const [isInviteCandidateOpen, setInviteCandidate] = useState<boolean>(false);

  const { data, loading } = useQuery(FETCH_JOB_COMPANY, {
    variables: { id },
    fetchPolicy: "cache-first",
  });

  const jobTitle = useMemo(() => {
    if (loading) return "";
    return data?.job?.jobTitle || "";
  }, [data, loading]);

  return (
    <>
      <LandingNavbar>
        <PageHeader>
          <PageLabelAndBurger>
            {!isDesktop && <BurgerMenu />}
            <BreadLink to="/recruiter/jobs">Jobs</BreadLink>
          </PageLabelAndBurger>
          <Breadcrumb>
            {isDesktop && <NextArrowIcon />}
            <BreadLink to={`/recruiter/jobs/${id}/view`}>
              {loading ? <GenericLoader small invert /> : jobTitle}
            </BreadLink>
            <NextArrowIcon /> Applicants
          </Breadcrumb>
        </PageHeader>
        <HeaderButton onClick={() => setInviteCandidate(true)}>
          <InviteCandidate />
          {isDesktop && <HeaderButtonText>Invite Candidate</HeaderButtonText>}
        </HeaderButton>
      </LandingNavbar>
      <Container />
      {isInviteCandidateOpen && (
        <InviteCandidates
          visible={isInviteCandidateOpen}
          handleCloseInviteCandidate={() => setInviteCandidate(false)}
        />
      )}
    </>
  );
};

export default View;
