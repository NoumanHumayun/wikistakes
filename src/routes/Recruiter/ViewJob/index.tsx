import { useContext, useState, useMemo } from "react";
import { ThemeContext } from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import LandingNavbar from "components/LandingNavbar";

import { BurgerMenu } from "components/burgermenu";
import { HeaderButton } from "components/button/primary";
import { BreadLink, HeaderButtonText } from "components/typography";

import {
  Breadcrumb,
  NextArrowIcon,
  PageHeader,
  PageLabelAndBurger,
} from "components/structural";

import InviteCandidates from "routes/Recruiter/InviteCandidates";
import { ReactComponent as InviteCandidate } from "assets/svg/invite_candidate.svg";

import Container from "./containers";
import { GET_JOB } from "./queries";

const View = () => {
  const { id } = useParams<any>();

  const { isDesktop } = useContext(ThemeContext);
  const [isInviteCandidateOpen, setInviteCandidate] = useState<boolean>(false);

  const { data, loading } = useQuery(GET_JOB, {
    variables: { id },
    fetchPolicy: "cache-first",
  });

  const { jobTitle = "" }: any = useMemo(() => {
    if (!loading && data?.job) return data?.job;
    return {};
  }, [data, loading]);

  return (
    <>
      <LandingNavbar>
        <PageHeader>
          <PageLabelAndBurger>
            <BurgerMenu />
            <BreadLink to="/recruiter/jobs">Jobs</BreadLink>
          </PageLabelAndBurger>
          <Breadcrumb>
            <NextArrowIcon />
            {jobTitle}
          </Breadcrumb>
        </PageHeader>
        <HeaderButton onClick={() => setInviteCandidate(true)}>
          {isDesktop && <HeaderButtonText>Invite Candidate</HeaderButtonText>}
          <InviteCandidate />
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