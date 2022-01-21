import styled from "styled-components";
import Button from "components/button/primary";
import { Label } from "components/typography";
import { Row, Column } from "components/structural";
import { ReactComponent as Add } from "assets/svg/add.svg";
import { ReactComponent as InviteCandidate } from "assets/svg/invite_candidate.svg";

export const JobButton = styled(Button)`
  background: #0a0529;
  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(176, 190, 197, 0.24);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  &:focus {
    border-radius: 8px;
    outline: 0px;
  }
`;

export const JobLabel = styled(Label)`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const CreateJobText = styled.span`
  padding-right: 12px;
  @media (max-width: 576px) {
    display: none;
  }
`;