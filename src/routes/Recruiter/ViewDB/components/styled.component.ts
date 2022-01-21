import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Button from "components/button/primary";
import { Label } from "components/typography";
import { Row, Column } from "components/structural";
import Select from "antd/lib/select";
import { ReactComponent as InviteCandidate } from "assets/svg/invite_candidate.svg";
import { ReactComponent as Burger } from "assets/svg/burger.svg";
import { ReactComponent as Arrow } from "assets/svg/arrow_down.svg";
import { ReactComponent as AddNote } from "assets/svg/addNote.svg";


export const ApplicantsButton = styled(Button)`
  background: #0a0529;
  color: #fff;
  &:focus {
    border-radius: 8px;
    outline: 0px;
  }
`;

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
${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
      padding: 8px 0px;
      position: static;
      width: 48px;
      height: 48px;
      border-radius: 8px;
      margin: 0px 8px;

`}
`;


export const InviteCandidateText = styled.span`
  padding-right: 12px;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const ResumeText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: flex-end;

  color: rgba(1, 1, 2, 0.96);
  flex: 1;
${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
      flex-direction: row important;
      margin: 10px 7px 0px 16px;

`}`;


export const InviteCandidateIcon = styled(InviteCandidate)`
  margin-right: 8px;
  height: 20px;
  width: 20px;
${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
      margin-right: 0px;
      height: 16.67px;
      width: 16.67px;

`}`;


export const CandidateNotesIcon = styled(InviteCandidate)`

position: absolute;
left: 12.5%;
right: 12.5%;
top: 8.33%;
bottom: 8.33%;
background: #FFFFFF;
  
`;


export const BurgerMenu = styled(Burger)`
  margin-right: 18px;
  cursor: pointer;
  @media (min-width: 577px) {
    display: none;
  }
`;
export const JobContainer = styled.div`
  max-width: 876px;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  @media (max-width: 576px) {
    padding: 0px;
  }
`;

export const CustomRow = styled(Row)`
  @media (max-width: 576px) {
    flex-direction: row !important;
    margin-left: 16px;
  }
`;


export const EditButtonColumn = styled(Column)`
  width: 100%;
  @media (max-width: 576px) {
    padding: 16px;
  }
`;

export const EditButton = styled(Button)`
  background: #fff;
  border: 0px;
  color: #0a0529;
  max-width: 120px;
  padding: 14px;
  font-size: 14px;
  font-weight: 600;
  svg {
    width: 20px;
    height: 20px;
  }
  &:focus {
    border-radius: 8px;
    outline: 0px;
  }
`;

export const ButtonText = styled.p`
  margin: 0px;
  margin-right: 14px;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const NextArrowIcon = styled(Arrow)`
  margin: 0px 5px !important;
  transform: rotate(270deg);
  @media (max-width: 576px) {
    & svg:first-child {
      display: none;
    }
    & svg:nth-child(2) {
      display: none;
    }
  }
`;

export const SelectInput = styled(Select)`
  width: 158px;
  height: 45px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  background: #ffffff;

  font-family: Lato;
  letter-spacing: 0.02em;

  border: 0.5px solid rgba(10, 5, 41, 0.32);
  box-sizing: border-box;
  border-radius: 8px;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: rgba(0, 0, 0, 0.8);
  padding-left: 4px;

  .ant-select-selector {
    border: 0px !important;
    background-color: transparent !important;
    outline: 0px !important;
    box-shadow: none !important;
    height: 48px;
  }
  .ant-select-selection-placeholder {
    color: #010102;
    font-size: 14px;
    font-weight: 400;
  }
  .ant-select-clear {
    background: transparent;
  }
  .ant-select-arrow {
    top: 40%;
    right: 15px;
  }
`;

export const OpenStatus = styled.div`
  width: 8px;
  height: 8px;
  background: #28f461;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-flex;
`;

export const ClosedStatus = styled.div`
  width: 8px;
  height: 8px;
  background: rgba(0, 0, 0, 0.24);
  border-radius: 50%;
  margin-right: 8px;
  display: inline-flex;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1024px;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  @media (max-width: 576px) {
    padding: 0px;
  }
`;

export const AddNoteIcon = styled(AddNote)`
  margin-right: 8px;
  height: 20px;
  width: 20px;
${({ theme: { isDesktop } }) =>
    isDesktop
      ? ``
      : css`
      margin-right: 0px;
    height: 16.67px;
    width: 16.67px;

`}
`;



