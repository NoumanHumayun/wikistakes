import React from "react";
import { useHistory } from "react-router-dom";
import Container from "./containers";
import LandingNavbar from "components/LandingNavbar";
import { ReactComponent as InviteCandidate } from "assets/svg/invite_candidate.svg";
import {
  JobLabel,
  JobButton,
  CreateJobText,
} from "./components/styled.component";
import { BurgerMenu } from "components/burgermenu";
import InviteCandidates from "routes/Recruiter/InviteCandidates";

const View = () => {
  const { push } = useHistory();
  const [isInviteCandidateOpen, setInviteCandidate] = React.useState<boolean>(
    false
  );

  const handleJobClick = React.useCallback(() => {
    push("/recruiter/jobs");
  }, [push]);

  return (
    <>
      <LandingNavbar>
        <JobLabel>
          <BurgerMenu />
          <span
            style={{ cursor: "pointer", textTransform: "uppercase" }}
            onClick={handleJobClick}
          >
            Candidates
          </span>
        </JobLabel>
        <JobButton onClick={() => setInviteCandidate(true)}>
          <CreateJobText>Invite candidates</CreateJobText>
          <InviteCandidate />
        </JobButton>
      </LandingNavbar>
      <Container />
      <InviteCandidates
        visible={isInviteCandidateOpen}
        handleCloseInviteCandidate={() => setInviteCandidate(false)}
      />
    </>
  );
};

export default View;
