import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { GlobalContext } from "context/GlobalContext";
import DbContainer from "./containers";
import LandingNavbar from "components/LandingNavbar";
import { ThemeContext } from "styled-components";

import {
  JobButton,
  InviteCandidateText,
  AddNoteIcon,
  BurgerMenu,
} from "./components/styled.component";
import {
  Breadcrumb, NextArrowIcon, PageHeader, PageLabelAndBurger
} from "components/structural";
import { CONTEXT } from "helpers/constants";

import { BreadLink } from "components/typography";
import ViewCandidate from "routes/Recruiter/ViewCandidate";
import { GET_CANDIDATES_RESUME } from "./queries";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client/react/hooks/useQuery";


const View = () => {
  const { push } = useHistory();
  const { isDesktop } = React.useContext(ThemeContext);
  const { id } = useParams<any>();
  const { dispatch } = React.useContext(GlobalContext);

  const { data, error, loading, refetch } = useQuery<any>(GET_CANDIDATES_RESUME, {
    variables: { id },
    fetchPolicy: "no-cache",
  });

  const {
    resume: {
      candidate: { id: candidateId, firstName, lastName },
    },
  } = data ?? { resume: { candidate: {id: "", firstName: "", lastName: "" } } };

  const [isViewCandidateOpen, setViewCandidate] = React.useState<boolean>(
    false
  );

  const handleOpenSideBar = React.useCallback(() => {
    dispatch({
      type: CONTEXT.SET_SIDEBAR_OPEN,
      data: true,
    });
  }, [dispatch]);

  const handleAddNote = React.useCallback((candidate: any) => {
    setViewCandidate(true);
  }, []);

  const handleCloseViewCandidate = React.useCallback((candidate_id: any) => {
    setViewCandidate(false);
  }, []);

  const handleJobClick = React.useCallback(() => {
    push("/recruiter/database");
  }, [push]);

  return (
    <>
      <LandingNavbar>
        <PageHeader>
          <PageLabelAndBurger>
            {!isDesktop && <BurgerMenu onClick={handleJobClick} />}
            <BreadLink to="/recruiter/database">Database</BreadLink>
          </PageLabelAndBurger>
          <Breadcrumb>
            <NextArrowIcon />
            {firstName} {lastName}
          </Breadcrumb>
        </PageHeader>
        <JobButton onClick={handleAddNote}>
          <InviteCandidateText>Add Note</InviteCandidateText>
          <AddNoteIcon />
        </JobButton>
      </LandingNavbar>
      <DbContainer />
      {isViewCandidateOpen && (
        <ViewCandidate
          isOpen={isViewCandidateOpen}
          onClose={handleCloseViewCandidate}
          candidateId={candidateId}
        />
      )}
    </>

  );
};

export default View;



